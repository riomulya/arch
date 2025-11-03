'use client';
import React, { useEffect, useRef, useState } from 'react';

/**
 * Custom cursor yang menggantikan cursor default dengan berbagai state
 * Default: Wrench icon
 * Pointer: Hand pointer untuk links & buttons
 * Text: Text cursor untuk input & textarea
 */
const FabrikasiCursor = () => {
  // Ref untuk menyimpan elemen cursor
  const cursorRef = useRef(null);
  // Ref untuk menyimpan posisi cursor
  const cursorPositionRef = useRef({ x: 0, y: 0 });
  // Ref untuk target position (untuk smooth following)
  const targetPositionRef = useRef({ x: 0, y: 0 });
  // Ref untuk animasi frame
  const animationRef = useRef(null);
  // State untuk cursor state
  const [cursorState, setCursorState] = useState('default');
  // State untuk visibility
  const [isVisible, setIsVisible] = useState(false);
  // Ref untuk mencegah flicker
  const stabilityRef = useRef(0);

  useEffect(() => {
    let rafId = null;

    // Ultra-responsive cursor following with hybrid approach
    const updateCursorPosition = () => {
      if (cursorRef.current) {
        const dx = targetPositionRef.current.x - cursorPositionRef.current.x;
        const dy = targetPositionRef.current.y - cursorPositionRef.current.y;

        // If distance is large, move directly (for quick movements)
        // If distance is small, use smoothing (for precision)
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > 10) {
          // Fast movement - direct positioning
          cursorPositionRef.current.x = targetPositionRef.current.x;
          cursorPositionRef.current.y = targetPositionRef.current.y;
        } else {
          // Small movements - use smoothing for precision
          cursorPositionRef.current.x += dx * 0.8; // Very responsive
          cursorPositionRef.current.y += dy * 0.8;
        }

        // Apply transformation immediately
        cursorRef.current.style.transform = `translate(${cursorPositionRef.current.x - 24}px, ${cursorPositionRef.current.y - 24}px)`;
      }

      rafId = requestAnimationFrame(updateCursorPosition);
    };

    // Start animation loop
    updateCursorPosition();

    // Determine cursor state based on element
    const determineCursorState = (element) => {
      if (!element) return 'default';

      const tagName = element.tagName.toLowerCase();
      const computedStyle = window.getComputedStyle(element);
      const cursor = computedStyle.cursor;

      // Check for clickable elements
      if (
        tagName === 'a' ||
        tagName === 'button' ||
        element.onclick ||
        element.role === 'button' ||
        cursor === 'pointer' ||
        element.classList.contains('cursor-pointer') ||
        element.closest('[onclick]') ||
        element.closest('a') ||
        element.closest('button')
      ) {
        return 'pointer';
      }

      // Check for text input elements
      if (
        tagName === 'input' ||
        tagName === 'textarea' ||
        element.contentEditable === 'true' ||
        cursor === 'text' ||
        element.closest('[contenteditable="true"]')
      ) {
        return 'text';
      }

      // Check for drag elements
      if (cursor === 'grab' || cursor === 'grabbing') {
        return 'grab';
      }

      // Check for disabled elements
      if (
        element.disabled ||
        element.getAttribute('aria-disabled') === 'true' ||
        element.closest('[disabled]') ||
        element.closest('[aria-disabled="true"]')
      ) {
        return 'not-allowed';
      }

      return 'default';
    };

    // Handle mouse movement - optimized for instant response
    const handleMouseMove = (e) => {
      targetPositionRef.current = { x: e.clientX, y: e.clientY };

      if (!isVisible) {
        setIsVisible(true);
        // Initialize position immediately for instant appearance
        cursorPositionRef.current = { x: e.clientX, y: e.clientY };
      }

      // Determine cursor state - optimized checking
      const newState = determineCursorState(e.target);
      if (newState !== cursorState) {
        setCursorState(newState);
      }

      // Reset stability counter
      stabilityRef.current = 0;
    };

    // Handle mouse enter to window
    const handleMouseEnter = () => {
      setIsVisible(true);
      stabilityRef.current = 0;
    };

    // Handle mouse leave from window
    const handleMouseLeave = () => {
      stabilityRef.current++;
      // Only hide if mouse has been out of window for more than 100ms
      setTimeout(() => {
        if (stabilityRef.current > 0) {
          setIsVisible(false);
        }
      }, 100);
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Hide default cursor
    document.body.style.cursor = 'none';

    // Prevent default cursor on all elements
    const style = document.createElement('style');
    style.innerHTML = '* { cursor: none !important; }';
    style.id = 'custom-cursor-style';
    document.head.appendChild(style);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);

      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      document.body.style.cursor = 'auto';
      const customStyle = document.getElementById('custom-cursor-style');
      if (customStyle) {
        customStyle.remove();
      }
    };
  }, [cursorState, isVisible]);

  // Get cursor content based on state
  const getCursorContent = () => {
    switch (cursorState) {
      case 'pointer':
        return (
          <div className="w-12 h-12 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
              <path d="M3 3L7.5 20.5L12 12L21 10L3 3Z" fill="#3B82F6" stroke="white" strokeWidth="1.5"/>
            </svg>
          </div>
        );
      case 'text':
        return (
          <div className="w-8 h-8 flex items-center justify-center">
            <div className="w-0.5 h-6 bg-gray-800 rounded-full"></div>
          </div>
        );
      case 'grab':
        return (
          <div className="w-12 h-12 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L14 9L21 9L16 13L18 20L12 16L6 20L8 13L3 9L10 9L12 2Z" fill="#F59E0B" stroke="white" strokeWidth="1"/>
            </svg>
          </div>
        );
      case 'not-allowed':
        return (
          <div className="w-12 h-12 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="9" stroke="#EF4444" strokeWidth="2"/>
              <path d="M8 8L16 16" stroke="#EF4444" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        );
      default:
        return (
          <div className="w-12 h-12 flex items-center justify-center">
            <img
              src="/cur/pixel_cursor_wrench.png"
              alt="Custom Cursor"
              className="w-10 h-10 drop-shadow-lg"
              style={{
                filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.3))',
                imageRendering: 'pixelated',
              }}
              draggable={false}
            />
          </div>
        );
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-[9999] ${
        cursorState === 'pointer' ? 'scale-110' : 'scale-100'
      }`}
      style={{
        willChange: 'transform',
        mixBlendMode: 'normal',
        // No transition for maximum responsiveness
      }}
    >
      {/* Main cursor */}
      <div className={`relative ${
        cursorState === 'pointer' ? 'rotate-12' : 'rotate-0'
      }`}
      style={{
        // No transition for instant state changes
        transition: 'none',
      }}>
        {getCursorContent()}
      </div>

      {/* Small dot for precision */}
      {cursorState === 'default' && (
        <div
          className="absolute top-1/2 left-1/2 w-1 h-1 bg-blue-500 rounded-full"
          style={{
            transform: 'translate(-50%, -50%)',
          }}
        />
      )}
    </div>
  );
};

export default FabrikasiCursor;
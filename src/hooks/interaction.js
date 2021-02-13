import { useEffect, useRef, useState } from 'react';

function useKey(key, handler) {
  useEffect(() => {
    function handleEscape(e) {
      if (e.key === key) {
        handler();
      }
    }

    document.addEventListener('keyup', handleEscape);

    return () => {
      document.removeEventListener('keyup', handleEscape);
    };
  }, [key, handler]);
}

export function useEnter(handler) {
  useKey('Enter', handler);
}

export function useEscape(handler) {
  useKey('Escape', handler);
}

export function useHover() {
  const [value, setValue] = useState(false);

  const ref = useRef(null);

  const handleMouseOver = (e) => {
    const node = ref.current;
    if (!node) return setValue(false);
    setValue(e.target === node || node.contains(e.target));
  };

  useEffect(
    () => {
      const node = ref.current;
      if (node) {
        const doc = node.ownerDocument;
        node.style.cursor = 'pointer';
        doc.addEventListener('mouseover', handleMouseOver);

        return () => {
          doc.removeEventListener('mouseover', handleMouseOver);
        };
      }
    },
    [ref] // Recall only if ref changes
  );

  return [ref, value];
}

export function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

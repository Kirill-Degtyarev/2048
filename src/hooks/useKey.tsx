import { useEffect, useRef } from 'react';

/**
 * Кастомный хук, который навешивает обработчик событий на клавиатуру.
 * Первый параметром приходит code клавиши, второй параметр это callback,
 * который будет вызываться при нажатии на клавишу.
 *
 * @param targetKey
 * @param cb
 */
const useKey = (targetKey: string, cb: () => void) => {
  const callback = useRef<(event: KeyboardEvent) => void>(cb);

  useEffect(() => {
    callback.current = cb;
  }, [cb]);

  useEffect(() => {
    const handle = (event: KeyboardEvent) => {
      if (event.code === targetKey) {
        callback.current(event);
      }
    };

    const keyPressHandler = (e: KeyboardEvent) => {
      handle(e);
    };

    document.addEventListener('keydown', keyPressHandler);
    return () => document.removeEventListener('keydown', keyPressHandler);
  }, [targetKey]);
};

export default useKey;

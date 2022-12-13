import {
  ActionCreatorWithoutPayload,
  ActionCreatorWithPayload,
  Middleware,
} from '@reduxjs/toolkit';

type TWsActions = {
  open: ActionCreatorWithoutPayload<string>;
  error: ActionCreatorWithoutPayload<string>;
  message: ActionCreatorWithPayload<any, string>;
  close: ActionCreatorWithoutPayload<string>;
  disconnect: ActionCreatorWithoutPayload<string>;
  connect: ActionCreatorWithPayload<any, string>;
};

const wsMiddleware =
  ({ close, error, message, open, disconnect, connect }: TWsActions): Middleware =>
  (store) => {
    let socket: WebSocket | null = null;
    return (next) => (action) => {
      const { dispatch } = store;
      const { type, payload } = action;

      switch (type) {
        case connect(null).type:
          if (socket !== null) break;
          socket = new WebSocket(payload);
          socket.onopen = () => {
            dispatch(open());
          };

          socket.onerror = () => {
            dispatch(error());
          };

          socket.onmessage = (event) => {
            dispatch(message(JSON.parse(event.data)));
          };

          socket.onclose = () => {
            dispatch(close());
          };
          break;
        case disconnect().type:
          if (!socket) break;
          socket.close();
          socket = null;
          break;
      }
      next(action);
    };
  };

export default wsMiddleware;

const wsMiddleware =
  ({ close, error, message, open, disconnect, connect }) =>
  (store) => {
    let socket = null;
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

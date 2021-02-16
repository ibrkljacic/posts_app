const MESSAGE = 'Hello from ';

export function withMessage(WrappedComponent) {
  function WithMessage(props) {
    return <WrappedComponent message={`${MESSAGE}${WrappedComponent.name}`} {...props} />;
  }

  return WithMessage;
}

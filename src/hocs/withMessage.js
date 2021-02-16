const MESSAGE = 'Hello from ';

export function withMessage(WrappedComponent) {
  function WithMessage(props, ref) {
    return <WrappedComponent message={`${MESSAGE}${WrappedComponent.name}`} inputRef={ref} {...props} />;
  }

  return WithMessage;
}

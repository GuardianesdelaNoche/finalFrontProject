import React from 'react';
import classNames from 'classnames';

import './FormField.css';

function FormField({ className, label, autofocus, ...props }) {
  const [focus, setFocus] = React.useState(autofocus);
  const inputRef = React.useRef(null);

  const handleFocus = () => setFocus(true);
  const handleBlur = () => setFocus(false);

  React.useEffect(() => {
    if (autofocus) {
      inputRef.current.focus();
    }
  }, [autofocus]);

  return (
    <div
      className={classNames(
        'formField',
        { 'formField--focused': focus },
        className,
      )}
    >
      <label className="formField-label">
        <span>{label}</span>
        <input
          ref={inputRef}
          className="formField-input"
          autoComplete="off"
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
      </label>
    </div>
  );
}

export default FormField;

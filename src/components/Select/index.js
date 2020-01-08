const React = require('react');
const Select = require('react-select');


/**
 * onChange from Redux Form Field has to be called explicity.
 */
function singleChangeHandler(func) {
  return function handleSingleChange(value) {
    func(value ? value.value : '');
  };
}

/**
   * onBlur from Redux Form Field has to be called explicity.
   */
function multiChangeHandler(func) {
  return function handleMultiHandler(values) {
    func(values.map(value => value.value));
  };
}

/**
   * For single select, Redux Form keeps the value as a string, while React Select
   * wants the value in the form { value: "grape", label: "Grape" }
   *
   * * For multi select, Redux Form keeps the value as array of strings, while React Select
   * wants the array of values in the form [{ value: "grape", label: "Grape" }]
   */
function transformValue(value, options, multi) {
  if (multi && typeof value === 'string') return [];

  const filteredOptions = options.filter(option => (multi
    ? value.indexOf(option.value) !== -1
    : option.value === value));

  return multi ? filteredOptions : filteredOptions[0];
}

const RFReactSelect = ({
  input, options, multi, className,
}) => {
  const {
    name, value, onBlur, onChange, onFocus,
  } = input;
  const transformedValue = transformValue(value, options, multi);
  return (
    <Select
      valueKey="value"
      name={name}
      value={transformedValue}
      multi={multi}
      options={options}
      onChange={multi
        ? multiChangeHandler(onChange)
        : singleChangeHandler(onChange)
      }
      onBlur={() => onBlur(value)}
      onFocus={onFocus}
      className={className}
    />
  );
};

module.exports = RFReactSelect;

RFReactSelect.defaultProps = {
  multi: false,
  className: '',
};

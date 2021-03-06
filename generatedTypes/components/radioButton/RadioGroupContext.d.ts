import React from 'react';
export interface RadioGroupContextPropTypes {
    /**
     * The identifier value of the radio button. must be different than other RadioButtons in the same group
     */
    value?: string | boolean;
    /**
     * Invoked once when value changes, by selecting one of the radio buttons in the group
     */
    onValueChange?: Function;
}
declare const _default: React.Context<RadioGroupContextPropTypes>;
export default _default;

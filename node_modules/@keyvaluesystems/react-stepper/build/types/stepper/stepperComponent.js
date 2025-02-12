import React from "react";
import "./styles.scss";
import { ORIENTATION } from "../constants";
import Step from "./step";
var Stepper = function (props) {
    var steps = props.steps, _a = props.currentStepIndex, currentStepIndex = _a === void 0 ? 0 : _a, _b = props.orientation, orientation = _b === void 0 ? ORIENTATION.VERTICAL : _b, stepContent = props.stepContent;
    var isVertical = orientation === ORIENTATION.VERTICAL;
    return (React.createElement(React.Fragment, null,
        React.createElement("ul", { className: "stepper ".concat(isVertical ? "verticalStepper" : "horizontalStepper") }, steps.map(function (step, index) { return React.createElement(Step, { key: "".concat(step.stepLabel, "-").concat(step.stepDescription), stepperProps: props, step: step, index: index }); })),
        !isVertical && // For horizontal stepper, the content is displayed below the stepper with full width
            stepContent &&
            stepContent(steps[currentStepIndex], currentStepIndex)));
};
export default Stepper;
//# sourceMappingURL=stepperComponent.js.map
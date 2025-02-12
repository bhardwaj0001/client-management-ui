var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from "react";
import Stepper from "../stepper";
export default {
    title: "Example/Stepper",
    component: Stepper,
    parameters: {
        layout: "fullscreen",
    },
};
var Template = function (props) { return (React.createElement(Stepper, __assign({}, props))); };
var steps = [
    {
        stepLabel: "Step 1",
        stepDescription: "The quick brown fox jumps over the lazy dog",
        completed: true,
    },
    {
        stepLabel: "Step 2",
        stepDescription: "The quick brown fox jumps over the lazy dog",
        completed: true,
    },
    {
        stepLabel: "Step 3",
        stepDescription: "The quick brown fox jumps over the lazy dog",
        completed: false,
    },
    {
        stepLabel: "Step 4",
        stepDescription: "The quick brown fox jumps over the lazy dog",
        completed: false,
    },
];
export var HorizontalStepperWithLabelOnLeft = Template.bind({});
HorizontalStepperWithLabelOnLeft.args = {
    orientation: "horizontal",
    labelPosition: "left",
    currentStepIndex: 2,
    steps: steps,
    showDescriptionsForAllSteps: false,
};
export var HorizontalStepperWithLabelOnRight = Template.bind({});
HorizontalStepperWithLabelOnRight.args = {
    orientation: "horizontal",
    labelPosition: "right",
    currentStepIndex: 2,
    steps: steps,
    showDescriptionsForAllSteps: false,
};
export var HorizontalStepperWithLabelOnTop = Template.bind({});
HorizontalStepperWithLabelOnTop.args = {
    orientation: "horizontal",
    labelPosition: "top",
    currentStepIndex: 2,
    steps: steps,
    showDescriptionsForAllSteps: false,
    stepContent: function () {
        return (React.createElement("div", { style: { width: "100%", height: "400px", backgroundColor: "gray", display: "flex", justifyContent: "center", alignItems: "center" } }, "Test"));
    }
};
export var HorizontalStepperWithLabelOnBottom = Template.bind({});
HorizontalStepperWithLabelOnBottom.args = {
    orientation: "horizontal",
    labelPosition: "bottom",
    currentStepIndex: 2,
    steps: steps,
    showDescriptionsForAllSteps: false,
};
export var VerticalStepperWithLabelOnLeft = Template.bind({});
VerticalStepperWithLabelOnLeft.args = {
    orientation: "vertical",
    labelPosition: "left",
    currentStepIndex: 2,
    steps: steps,
    showDescriptionsForAllSteps: false,
};
export var VerticalStepperWithLabelOnRight = Template.bind({});
VerticalStepperWithLabelOnRight.args = {
    orientation: "vertical",
    labelPosition: "right",
    currentStepIndex: 2,
    steps: steps,
    showDescriptionsForAllSteps: false,
};
export var VerticalStepperWithLabelOnTop = Template.bind({});
VerticalStepperWithLabelOnTop.args = {
    orientation: "vertical",
    labelPosition: "top",
    currentStepIndex: 2,
    steps: steps,
    showDescriptionsForAllSteps: false,
};
export var VerticalStepperWithLabelOnBottom = Template.bind({});
VerticalStepperWithLabelOnBottom.args = {
    orientation: "vertical",
    labelPosition: "bottom",
    currentStepIndex: 2,
    steps: steps,
    showDescriptionsForAllSteps: false,
};
//# sourceMappingURL=StepperComponent.stories.js.map
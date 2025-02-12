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
import "./styles.scss";
import { LABEL_POSITION, Elements } from "../constants";
import getStyles from "../utils/getStyles";
var StepContent = function (_a) {
    var labelPosition = _a.labelPosition, isVertical = _a.isVertical, currentStepIndex = _a.currentStepIndex, index = _a.index, styles = _a.styles, step = _a.step, showDescriptionsForAllSteps = _a.showDescriptionsForAllSteps, middleConnectorClassName = _a.middleConnectorClassName, stepContent = _a.stepContent, nodeWidth = _a.nodeWidth;
    return (React.createElement("div", { className: "descriptionContainer ".concat(labelPosition === "left" ? "labelLeft leftDescription" : "") },
        isVertical && (
        /* In a vertical stepper, utilize an extra middle connector to dynamically adjust the length based on the height of step descriptions.
    This ensures a visually balanced layout by accommodating varying content heights. */
        React.createElement("div", { className: labelPosition === LABEL_POSITION.LEFT
                ? "leftContentMiddleConnectorWrapper"
                : "middleConnectorWrapper", style: {
                width: nodeWidth / 2 + 1
            } },
            React.createElement("div", { className: middleConnectorClassName, style: __assign({}, (step.completed
                    ? getStyles(styles, Elements.LineSeparator, step, index) || {}
                    : getStyles(styles, Elements.InactiveLineSeparator, step, index) || {})) }))),
        React.createElement("div", { className: isVertical ? "verticalContentWrapper" : "" },
            step.stepDescription && (showDescriptionsForAllSteps || index === currentStepIndex) && (React.createElement("div", { className: "description", id: "step-description-".concat(index), style: __assign({}, (currentStepIndex === index
                    ? getStyles(styles, Elements.ActiveLabelDescription, step, index) || {}
                    : getStyles(styles, Elements.LabelDescription, step, index) ||
                        {})) }, step.stepDescription)),
            isVertical &&
                index === currentStepIndex &&
                stepContent &&
                stepContent(step, index))));
};
export default StepContent;
//# sourceMappingURL=stepContent.js.map
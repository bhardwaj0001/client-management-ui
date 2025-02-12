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
import Node from "../node";
import { LABEL_POSITION, Elements, ORIENTATION } from "../constants";
import getStyles from "../utils/getStyles";
import getLabelStyle from "../utils/getLabelStyle";
var StepInfo = function (_a) {
    var _b;
    var orientation = _a.orientation, labelPosition = _a.labelPosition, isVertical = _a.isVertical, isInlineLabelsAndSteps = _a.isInlineLabelsAndSteps, index = _a.index, currentStepIndex = _a.currentStepIndex, step = _a.step, showDescriptionsForAllSteps = _a.showDescriptionsForAllSteps, onStepClick = _a.onStepClick, renderNode = _a.renderNode, styles = _a.styles, nodeRef = _a.nodeRef, prevConnectorClassName = _a.prevConnectorClassName, nextConnectorClassName = _a.nextConnectorClassName, steps = _a.steps;
    return (React.createElement("div", { id: "stepper-step", className: isVertical
            ? "verticalStepperWrapper ".concat(labelPosition === LABEL_POSITION.LEFT ? "labelLeft" : "")
            : "horizontalStepperWrapper" },
        !isInlineLabelsAndSteps && (React.createElement("div", { className: getLabelStyle(orientation, labelPosition), onClick: function () { return onStepClick && onStepClick(step, index); } },
            React.createElement("div", { className: "label", id: "step-label-".concat(index), style: __assign(__assign({}, (getStyles(styles, Elements.LabelTitle, step, index) || {})), (index === currentStepIndex &&
                    (getStyles(styles, Elements.ActiveLabelTitle, step, index) ||
                        {}))) }, step.stepLabel),
            step.stepDescription && (showDescriptionsForAllSteps || index === currentStepIndex) &&
                orientation !== ORIENTATION.VERTICAL &&
                labelPosition === LABEL_POSITION.TOP && (React.createElement("div", { className: "description", id: "step-horizontal-top-description-".concat(index), style: __assign({}, (currentStepIndex === index
                    ? getStyles(styles, Elements.ActiveLabelDescription, step, index) || {}
                    : getStyles(styles, Elements.LabelDescription, step, index) ||
                        {})) }, step.stepDescription)))),
        React.createElement("div", { className: "stepContainer", id: "".concat(index, "-node"), ref: nodeRef },
            React.createElement("div", { className: prevConnectorClassName, style: __assign({}, (((_b = steps[index - 1]) === null || _b === void 0 ? void 0 : _b.completed)
                    ? getStyles(styles, Elements.LineSeparator, step, index) || {}
                    : getStyles(styles, Elements.InactiveLineSeparator, step, index) ||
                        {})) }),
            React.createElement("div", { className: "node ".concat([LABEL_POSITION.TOP, LABEL_POSITION.LEFT].includes(labelPosition)
                    ? "reversedNode"
                    : "") },
                React.createElement(Node, { step: step, index: index, currentStepIndex: currentStepIndex, handleStepClick: function () { return onStepClick && onStepClick(step, index); }, showCursor: !!onStepClick, renderNode: renderNode, getStyles: function (element) {
                        return getStyles(styles, element, step, index);
                    } })),
            isInlineLabelsAndSteps && (React.createElement("div", { className: "labelContainer ".concat([LABEL_POSITION.TOP, LABEL_POSITION.LEFT].includes(labelPosition)
                    ? "reversedLabelContainer"
                    : "") },
                React.createElement("div", { className: "label ".concat(isVertical && "verticalStepperInlineLabel"), id: "step-inline-label-".concat(index), style: __assign(__assign({}, (getStyles(styles, Elements.LabelTitle, step, index) || {})), (index === currentStepIndex &&
                        (getStyles(styles, Elements.ActiveLabelTitle, step, index) ||
                            {}))), onClick: function () { return onStepClick && onStepClick(step, index); } }, step.stepLabel))),
            React.createElement("div", { className: nextConnectorClassName, style: __assign({}, (step.completed
                    ? getStyles(styles, Elements.LineSeparator, step, index) || {}
                    : getStyles(styles, Elements.InactiveLineSeparator, step, index) ||
                        {})) }))));
};
export default StepInfo;
//# sourceMappingURL=stepInfo.js.map
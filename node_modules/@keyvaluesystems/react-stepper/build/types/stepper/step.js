import React, { useRef, useEffect, useState } from "react";
import "./styles.scss";
import { LABEL_POSITION, ORIENTATION } from "../constants";
import StepContent from "./stepContent";
import StepInfo from "./stepInfo";
//  Each step consists of a node, a label, and connectors to the previous and next steps.
var Step = function (_a) {
    var _b, _c;
    var stepperProps = _a.stepperProps, step = _a.step, index = _a.index;
    var steps = stepperProps.steps, _d = stepperProps.currentStepIndex, currentStepIndex = _d === void 0 ? 0 : _d, _e = stepperProps.styles, styles = _e === void 0 ? {} : _e, _f = stepperProps.labelPosition, labelPosition = _f === void 0 ? LABEL_POSITION.RIGHT : _f, _g = stepperProps.orientation, orientation = _g === void 0 ? ORIENTATION.VERTICAL : _g, _h = stepperProps.showDescriptionsForAllSteps, showDescriptionsForAllSteps = _h === void 0 ? false : _h, stepContent = stepperProps.stepContent, onStepClick = stepperProps.onStepClick, renderNode = stepperProps.renderNode;
    var _j = useState(0), nodeWidth = _j[0], setNodeWidth = _j[1];
    var isVertical = orientation === ORIENTATION.VERTICAL;
    /* isInlineLabelsAndSteps = true means label and steps are in the same axis (eg: Horizontal stepper with label direction left/right and
     vertical stepper with label direction top/bottom) */
    var isInlineLabelsAndSteps = (isVertical &&
        ![LABEL_POSITION.LEFT, LABEL_POSITION.RIGHT].includes(labelPosition)) ||
        (!isVertical &&
            [LABEL_POSITION.LEFT, LABEL_POSITION.RIGHT].includes(labelPosition));
    var nodeRef = useRef(null);
    useEffect(function () {
        var node = nodeRef.current;
        if (node) {
            var width = node.getBoundingClientRect().width;
            setNodeWidth(width);
        }
    }, [steps, labelPosition, orientation]);
    // prevConnector represents the connector line from the current step's node (nth node) to the preceding step's node (n-1 th node).
    var prevConnectorClassName = "stepConnector leftConnector ".concat(((_b = steps[index - 1]) === null || _b === void 0 ? void 0 : _b.completed) ? "activeConnector" : "", " ").concat(index === 0 ? "hiddenConnector" : "");
    // nextConnector represents the connector line from the current step's node (nth node) to the preceding step's node (n-1 th node).
    var nextConnectorClassName = "stepConnector rightConnector ".concat(((_c = steps[index]) === null || _c === void 0 ? void 0 : _c.completed) ? "activeConnector" : "", " ").concat(index === steps.length - 1 ? "hiddenConnector" : "");
    /* middleConnector connects the current step nextConnector to (n+1th) step prevConnector,
    allowing the display of descriptions or content between the two steps when necessary.  */
    var middleConnectorClassName = "middleStepConnector ".concat(currentStepIndex > index ? "activeConnector" : "", " ").concat(index === steps.length - 1 ? "hiddenConnector" : "");
    return orientation !== ORIENTATION.VERTICAL &&
        labelPosition === LABEL_POSITION.TOP ? (React.createElement(StepInfo, { orientation: orientation, labelPosition: labelPosition, isVertical: isVertical, isInlineLabelsAndSteps: isInlineLabelsAndSteps, index: index, currentStepIndex: currentStepIndex, step: step, showDescriptionsForAllSteps: showDescriptionsForAllSteps, onStepClick: onStepClick, renderNode: renderNode, styles: styles, nodeRef: nodeRef, prevConnectorClassName: prevConnectorClassName, nextConnectorClassName: nextConnectorClassName, steps: steps })) : (React.createElement("div", { className: orientation === ORIENTATION.VERTICAL &&
            labelPosition === LABEL_POSITION.LEFT
            ? "verticalTextLeftContainer"
            : "" },
        React.createElement(StepInfo, { orientation: orientation, labelPosition: labelPosition, isVertical: isVertical, isInlineLabelsAndSteps: isInlineLabelsAndSteps, index: index, currentStepIndex: currentStepIndex, step: step, showDescriptionsForAllSteps: showDescriptionsForAllSteps, onStepClick: onStepClick, renderNode: renderNode, styles: styles, nodeRef: nodeRef, prevConnectorClassName: prevConnectorClassName, nextConnectorClassName: nextConnectorClassName, steps: steps }),
        React.createElement(StepContent, { labelPosition: labelPosition, isVertical: isVertical, currentStepIndex: currentStepIndex, index: index, styles: styles, step: step, showDescriptionsForAllSteps: showDescriptionsForAllSteps, middleConnectorClassName: middleConnectorClassName, stepContent: stepContent, nodeWidth: nodeWidth })));
};
export default Step;
//# sourceMappingURL=step.js.map
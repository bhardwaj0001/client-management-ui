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
import { Elements } from "../constants";
import whiteTick from "../assets/white-tick.svg";
import styles from "./styles.module.scss";
var Node = function (props) {
    var step = props.step, renderNode = props.renderNode, index = props.index, currentStepIndex = props.currentStepIndex, handleStepClick = props.handleStepClick, showCursor = props.showCursor, getStyles = props.getStyles;
    return (React.createElement("div", { className: "".concat(styles.eachNode, "\n      ").concat(showCursor && styles.cursorPointer, "\n      ").concat(index === currentStepIndex && styles.activeStepNode, "\n      ").concat(!step.completed && currentStepIndex !== index && styles.inactiveStepNode, "\n      ").concat(step.completed && currentStepIndex !== index && styles.completedStepNode, "\n      "), style: __assign(__assign(__assign(__assign({}, ((getStyles(Elements.Node)) || {})), ((index === currentStepIndex && getStyles(Elements.ActiveNode)) || {})), ((step.completed && getStyles(Elements.CompletedNode)) || {})), ((!step.completed && currentStepIndex !== index
            && getStyles(Elements.InActiveNode)) || {})), onClick: function () { return handleStepClick && handleStepClick(); }, role: "presentation", id: "stepper-node" }, (renderNode && renderNode(step, index))
        || (React.createElement(React.Fragment, null, (step === null || step === void 0 ? void 0 : step.completed) && (React.createElement("img", { src: whiteTick, className: styles.whiteTickImg, alt: "" }))
            || index + 1))));
};
export default Node;
//# sourceMappingURL=node.js.map
import { Elements } from "../constants";
import { IStep, IStyleFunction } from "../stepper/types";
declare const getStyles: (styles: {
    LabelDescription?: IStyleFunction | undefined;
    LabelTitle?: IStyleFunction | undefined;
    ActiveLabelTitle?: IStyleFunction | undefined;
    ActiveLabelDescription?: IStyleFunction | undefined;
    LineSeparator?: IStyleFunction | undefined;
    InactiveLineSeparator?: IStyleFunction | undefined;
    Node?: IStyleFunction | undefined;
    ActiveNode?: IStyleFunction | undefined;
    InActiveNode?: IStyleFunction | undefined;
    CompletedNode?: IStyleFunction | undefined;
}, element: Elements, step: IStep, index: number) => object;
export default getStyles;

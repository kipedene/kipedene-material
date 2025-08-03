export interface KmatBtn {
    id?: string;
    label?: string;
    title?: string;
    content: string;
    action?: string;
    disabled?: boolean;
    disableDuration?: number;
    hide?: boolean;
    hideDuration?: number;
    css?: string;

    checkButtonEnable: () => boolean;
    onButtonClick: () => void;
}
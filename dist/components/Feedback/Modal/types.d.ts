/// <reference types="react" />
interface ModalProps {
    children: React.ReactNode;
    width?: number;
    height?: number;
    borderRadius?: number;
    padding?: string;
    backgroundColor?: string;
    buttonGap?: number;
    okButton?: React.ReactNode;
    cancelButton?: React.ReactNode;
    isCloseButtonVisible?: boolean;
    onClose?: () => void;
}
export type { ModalProps };

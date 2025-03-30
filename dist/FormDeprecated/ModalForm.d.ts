export default ModalForm;
export class ModalForm extends Form {
    constructor(props: any);
    /**
     *
     * @type {boolean}
     */
    closeModal: boolean;
    /**
     *
     * @type {boolean}
     */
    hiddenModal: boolean;
    state: {
        show: any;
    };
    componentDidMount(): void;
    getButtonStyle(): any;
    getModalName(): void;
    getButtonText(): void;
    getButtonId(): void;
    handleClose(): void;
    getClearForm(): {};
    handleShow(): void;
    handleEdit(): void;
}
import Form from "./Form";
//# sourceMappingURL=ModalForm.d.ts.map
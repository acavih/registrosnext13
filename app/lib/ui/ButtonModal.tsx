"use client";
import { Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from "@nextui-org/react";

export function ButtonModal({ title = 'Modal sin título', activator, children }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <div>
            <div>
                {activator(onOpen)}
            </div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(close) => (
                        <>
                            <ModalHeader>{title}</ModalHeader>
                            <ModalBody>
                                {children(close)}
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}

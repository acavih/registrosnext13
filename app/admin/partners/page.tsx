"use client"
import { Button, Input, Table, TableBody, TableColumn, TableHeader } from "@nextui-org/react";
import { useState } from "react";
import { useFetch } from "use-http";
import { ButtonModal } from "../../lib/ui/ButtonModal";

export default function PartnerPage() {
    const [query, setQuery] = useState('')
    const request = useFetch('https://jsonplaceholder.typicode.com/posts', [query])

    return (
        <div>
            <div className="flex justify-between items-center">
                <p className="text-2xl">Listado de socios....</p>
                <ButtonModal title="Crear socio"
                    activator={(open) => (<Button color="primary" onPress={open}>Crear socio</Button>)
                }>
                    {(close) => (
                        <>
                            <p>Contenido del modal</p>
                            <div>
                                <Button color="danger" onClick={close}>Cerrar</Button>
                            </div>
                        </>
                    )}
                </ButtonModal>
            </div>
            <div className="my-5">
                <Input value={query} onChange={(e) => setQuery(e.target.value)} label="Buscar socio" />
            </div>
            <Table aria-label="Example empty table">
                <TableHeader>
                    <TableColumn>Nombre</TableColumn>
                    <TableColumn>Apellidos</TableColumn>
                    <TableColumn>SIP</TableColumn>
                    <TableColumn>Telefono</TableColumn>
                    <TableColumn>Email</TableColumn>
                    <TableColumn>Acciones</TableColumn>
                </TableHeader>
                <TableBody emptyContent={"No hay elementos para mostrar."}>{[]}</TableBody>
            </Table>
        </div>
    )
}

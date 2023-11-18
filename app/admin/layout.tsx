import { Button } from "@nextui-org/react"

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div>
            <div className="w-full flex justify-between items-center p-2 bg-blue-800">
                <p className="text-2xl text-white">Registros</p>
                <Button color="danger">Salir</Button>
            </div>
            <div className="mt-4 w-9/12 mx-auto">
                {children}
            </div>
        </div>
    )
  }
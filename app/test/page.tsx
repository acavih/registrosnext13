import mongoose from 'mongoose'
import {Partner} from '../db/Partner'

export default async function Page () {
    await mongoose.connect(process.env.MONGO_DB_URI as string, {})
    
    const partners = await Partner.find({}).select(['nombre', 'codigo']).limit(20)

    return (
        <div>
            {partners.map(p => (
                <div key={p.nombre}>
                    <p>{p.nombre}</p>
                </div>
            ))}
        </div>
    )
}
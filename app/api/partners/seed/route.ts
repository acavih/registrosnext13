import { sql } from "@vercel/postgres";
import { createKysely } from "@vercel/postgres-kysely";
import { NextResponse } from "next/server";

const db = createKysely<any>()

async function getNationality (nationality: string, code = '') {
    const result = await sql`SELECT * FROM "Nationality" WHERE name = ${nationality}`
    let [nationalityDB] = result.rows
    if (!nationalityDB)
        nationalityDB = (await sql`INSERT  INTO "Nationality"(name, code) VALUES (${nationality}, ${code}) RETURNING id`).rows[0].id
    return nationalityDB
}

async function getCity () {
}

export async function GET() {
    const idNationality = await getNationality('Bélgica', '', /*faker.location.country()*/)
    console.log('id nationalitu', idNationality)
    /*for (let index = 0; index < 100; index++) {
        const partner = await prisma.partner.create({
            data: {
                name: faker.person.firstName(),
                surname: faker.person.lastName(),
                email: faker.internet.email(),
                phone: faker.phone.number(),
                sip: '6548954568e',
                bornDate: faker.date.between({from: '1994-01-01', to: '2003-12-31'}),
                pendent: faker.lorem.sentence(200),
                /*nationalityId: (await getNationality()).id,
                city: {
                    connectOrCreate: {
                        create: {name: 'aaa', code: 'aa'},
                        where: {
                            id: city.id
                        }
                    }
                }
            }
        })
        console.log(partner)
    }*/

    return NextResponse.json({message: 'Hola mundo'})
}
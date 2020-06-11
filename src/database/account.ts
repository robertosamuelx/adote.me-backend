import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

prisma.account.create({
    data: {
        login: 'betin@betin.com',
        password: '123',
        Profile: {
            create: {
                email: 'betin@betin.com',
                name: 'Betin'
            }
        }
    }
}).then(account => {
    console.log(account);
});
import { cleanEnv, port, str as string } from 'envalid';

export class Environment{
    public static config(){
        return cleanEnv(process.env, {
            PORT: port({
                desc: 'Express server is running on port: ',
                example: '3000',
                default: 3000,
                docs: 'https://expressjs.com/en/starter/hello-world.html'
            }),
            NODE_ENV: string({
                desc: "Node Mode on",
                example: "development",
                choices: ["development", "test", "production"] as const,
                default: "development",
                docs: 'https://nodejs.dev/en/learn/how-to-read-environment-variables-from-nodejs/'
            }),
            DATABASE_URL: string(),
            JWT_SECRET: string()
        })
    }
}
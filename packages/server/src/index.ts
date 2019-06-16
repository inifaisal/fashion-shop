
import { prismaObjectType, makePrismaSchema } from 'nexus-prisma'
import { idArg } from 'nexus'
import { GraphQLServer } from 'graphql-yoga'
import { prisma } from './generated/prisma-client'
import datamodelInfo from './generated/nexus-prisma'
import * as path from 'path';

// Expose the full "Query" building block
const Query = prismaObjectType({
  name: 'Query',
  // Expose all generated queries
  definition: t => t.prismaFields(['*'])
})

// Customize the "Mutation" building block
const Mutation = prismaObjectType({
  name: 'Mutation',
  definition(t) {
    // Expose only generated `Product`-mutations
    t.prismaFields(['createProduct', 'updateProduct', 'deleteProduct'])
  }
})

const schema = makePrismaSchema({
  types: [Query, Mutation],

  prisma: {
    client: prisma,
    datamodelInfo
  },

  outputs: {
    schema: path.join(__dirname, './generated/schema.graphql'),
    typegen: path.join(__dirname, './generated/nexus.ts'),
  }
})

const server = new GraphQLServer({
  schema,
  context: { prisma }
})
server.start(() => console.log('Server is running on http://localhost:4000'))
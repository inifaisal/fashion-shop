import { prisma } from '../src/generated/prisma-client'

async function main() {
  await prisma.createUser({
    email: 'admin@email.com',
    name: 'admin',
  })
  await prisma.createProduct({
    description: '',
    title: 'Mokzilla Stripe V-Neck Mini Dress',
    price: '139.000',
    brand: 'mokzilla',
    material: 'Cotton',
    slug: "mokzilla-stripe-v-neck-mini-dress",
    category: {
      create: {
        title: "dress"
      }
    },
    images: {
      create: [
        {
          url: 'https://imager-next.freetls.fastly.net/images/resized/480/60155d66-9dcf-4839-b016-3f308af58623',
          description: ''
        },
        {
          url: 'https://imager-next.freetls.fastly.net/images/resized/480/82f3272e-72b4-4545-b7d3-af383afdf07d',
          description: ''
        },
        {
          url: 'https://imager-next.freetls.fastly.net/images/resized/480/5c210377-4bf6-449d-b1f6-0579c50e812d',
          description: ''
        },
        {
          url: 'https://imager-next.freetls.fastly.net/images/resized/480/0fd8ca07-cf18-4b75-be22-7e708b67ff1f',
          description: ''
        },
        {
          url: 'https://imager-next.freetls.fastly.net/images/resized/480/e9a0c31e-939b-43f4-b4fa-511998053c74',
          description: ''
        }
      ]
    }
  })
  await prisma.createProduct({
    description: '',
    title: 'Y&F Kwanhe Polkadot Bodycon Mini Dress',
    price: '159.000',
    brand: 'Y&F',
    material: 'Cotton',
    slug: "yf-kwanhe-polkadot-bodycon-mini-dress",
    category: {
      create: {
        title: "dress"
      }
    },
    images: {
      create: [
        {
          url: 'https://imager-next.freetls.fastly.net/images/resized/480/9a5b5318-951f-4e5d-895b-467a29970152',
          description: ''
        },
        {
          url: 'https://imager-next.freetls.fastly.net/images/resized/480/df8a2865-e5e9-421f-a111-2baafce88b2c',
          description: ''
        },
        {
          url: 'https://imager-next.freetls.fastly.net/images/resized/480/8bd7842e-5a29-46d5-95e9-ced0da11669a',
          description: ''
        },
        {
          url: 'https://imager-next.freetls.fastly.net/images/resized/480/5085559f-df9c-4c01-a7c6-f6c32c66ef94',
          description: ''
        }
      ]
    }

  })
}

main().catch(e => console.error(e))

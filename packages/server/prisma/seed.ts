import { prisma } from '../src/generated/prisma-client'
import { Slugify } from '../src/utils';

async function main() {
  await prisma.createUser({
    email: 'admin@email.com',
    name: 'admin',
  })


  const category = await prisma.createCategory({
    title: 'dress'
  });

  const products = [
    {
      description: 'Sunt culpa id pariatur et. Commodo incididunt ex excepteur fugiat voluptate voluptate nisi commodo deserunt reprehenderit non aliquip. Incididunt aliquip non sint ex laboris officia ex.',
      title: 'Mokzilla Stripe V-Neck Mini Dress',
      price: '139.000',
      brand: 'mokzilla',
      material: 'Cotton',
      slug: Slugify('Mokzilla Stripe V-Neck Mini Dress'),
      category: {
        connect: {
          id: category.id
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
    },

    {
      description: 'Sunt culpa id pariatur et. Commodo incididunt ex excepteur fugiat voluptate voluptate nisi commodo deserunt reprehenderit non aliquip. Incididunt aliquip non sint ex laboris officia ex.',
      title: 'Y&F Kwanhe Polkadot Bodycon Mini Dress',
      price: '159.000',
      brand: 'Y&F',
      material: 'Cotton',
      slug: Slugify('Y&F Kwanhe Polkadot Bodycon Mini Dress'),
      category: {
        connect: {
          id: category.id
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

    },
    {
      title: "Braeley Brukat Ribbon Mini Dress",
      description: "Sunt culpa id pariatur et. Commodo incididunt ex excepteur fugiat voluptate voluptate nisi commodo deserunt reprehenderit non aliquip. Incididunt aliquip non sint ex laboris officia ex.",
      price: "159.000",
      brand: "Braeley",
      material: "Brukat",
      slug: Slugify('Braeley Brukat Ribbon Mini Dress'),
      category: {
        connect: {
          id: category.id
        }
      },
      images: {
        create: [{
          url: 'https://imager-next.freetls.fastly.net/images/resized/480/221e71ad-7072-4aea-87c0-3afd36bb16cc',
          description: ''
        }]
      }
    },
    {
      title: "Abbigayle Brukat V-neck Midi Dress",
      description: "Sunt culpa id pariatur et. Commodo incididunt ex excepteur fugiat voluptate voluptate nisi commodo deserunt reprehenderit non aliquip.",
      price: "209.000",
      brand: "Abbigayle",
      material: "Brukat",
      slug: Slugify('Abbigayle Brukat V-neck Midi Dress'),
      category: {
        connect: {
          id: category.id
        }
      },
      images: {
        create: [{
          url: 'https://imager-next.freetls.fastly.net/images/resized/480/6c2f0be0-726f-4c9b-97a1-a9708506ad2a',
          description: ''
        }]
      }
    },
    {
      title: "Jueliza Flowery Flare Midi Dress",
      description: "Sunt culpa id pariatur et. Commodo incididunt ex excepteur fugiat voluptate voluptate nisi commodo deserunt reprehenderit non aliquip.",
      price: "189.000",
      brand: "Jueliza",
      material: "Satin",
      slug: Slugify('Jueliza Flowery Flare Midi Dress'),
      category: {
        connect: {
          id: category.id
        }
      },
      images: {
        create: [{
          url: 'https://imager-next.freetls.fastly.net/images/resized/480/fc2d492e-6e28-4722-84cc-a06b39ad0d5e',
          description: ''
        }]
      }
    },
    {
      title: "Y&F Nori Texture Simple Mini Dress",
      description: "Sunt culpa id pariatur et. Commodo incididunt ex excepteur fugiat voluptate voluptate nisi commodo deserunt reprehenderit non aliquip.",
      price: "159.000",
      brand: "Y&F",
      material: "Knit",
      slug: Slugify('Y&F Nori Texture Simple Mini Dress'),
      category: {
        connect: {
          id: category.id
        }
      },
      images: {
        create: [{
          url: 'https://imager-next.freetls.fastly.net/images/resized/480/6d6b5bf4-9cea-4963-b8d1-245f952d0926',
          description: ''
        },
        {
          url: 'https://imager-next.freetls.fastly.net/images/resized/480/e2b77caf-c10c-4faf-bfdd-a7d593360cf3',
          description: ''
        },
        {
          url: 'https://imager-next.freetls.fastly.net/images/resized/480/067e1c36-e58f-45d8-86c8-b196791aa5b0',
          description: ''
        },
        {
          url: 'https://imager-next.freetls.fastly.net/images/resized/480/d43c8b73-a585-44dc-97ab-990dcc4c65fc',
          description: ''
        },
        {
          url: 'https://imager-next.freetls.fastly.net/images/resized/480/7dfe6df6-a526-4a85-8be8-1a46d798b941',
          description: ''
        },
        {
          url: 'https://imager-next.freetls.fastly.net/images/resized/480/d135cb8a-e5df-49f0-94d0-ba6318049b12',
          description: ''
        }]
      }
    },
    {
      title: "Zina Plain Draped Mini Dress",
      description: "Sunt culpa id pariatur et. Commodo incididunt ex excepteur fugiat voluptate voluptate nisi commodo deserunt reprehenderit non aliquip.",
      price: "149.000",
      brand: "Zina",
      material: "Satin",
      slug: Slugify('Zina Plain Draped Mini Dress'),
      category: {
        connect: {
          id: category.id
        }
      },
      images: {
        create: [{
          url: 'https://imager-next.freetls.fastly.net/images/resized/480/885c680d-080c-4997-9d8c-bf43c6e7fb6d',
          description: ''
        }]
      }
    },
    {
      title: "Litariana Texture Bow Mini Dress",
      description: "Sunt culpa id pariatur et. Commodo incididunt ex excepteur fugiat voluptate voluptate nisi commodo deserunt reprehenderit non aliquip.",
      price: "139.000",
      brand: "Litariana",
      material: "Knit",
      slug: Slugify('Litariana Texture Bow Mini Dress'),
      category: {
        connect: {
          id: category.id
        }
      },
      images: {
        create: [{
          url: 'https://imager-next.freetls.fastly.net/images/resized/480/818a1afd-867c-420d-bec1-4b3882733f93',
          description: ''
        }]
      }
    },
    {
      title: "Jenevasa Plain Pleats Big Mini Dress",
      description: "Sunt culpa id pariatur et. Commodo incididunt ex excepteur fugiat voluptate voluptate nisi commodo deserunt reprehenderit non aliquip.",
      price: "179.000",
      brand: "Jenevasa",
      material: "Crepe",
      slug: Slugify('Jenevasa Plain Pleats Big Mini Dress'),
      category: {
        connect: {
          id: category.id
        }
      },
      images: {
        create: [{
          url: 'https://imager-next.freetls.fastly.net/images/resized/480/84245137-20f4-4209-a715-fa9e41f9fe51',
          description: ''
        }]
      }
    },
    {
      title: "Asarashi Plain Collar Mini Dress",
      description: "Sunt culpa id pariatur et. Commodo incididunt ex excepteur fugiat voluptate voluptate nisi commodo deserunt reprehenderit non aliquip.",
      price: "169.000",
      brand: "Asarashi",
      material: "Denim",
      slug: Slugify('Asarashi Plain Collar Mini Dress'),
      category: {
        connect: {
          id: category.id
        }
      },
      images: {
        create: [{
          url: 'https://imager-next.freetls.fastly.net/images/resized/480/2184fa13-4d32-45b1-9d58-860609677147',
          description: ''
        }]
      }
    },
    {
      title: "Kinslie Plain Cold Shoulder Mini Dress",
      description: "Sunt culpa id pariatur et. Commodo incididunt ex excepteur fugiat voluptate voluptate nisi commodo deserunt reprehenderit non aliquip.",
      price: "169.000",
      brand: "Kinslie",
      material: "Denim",
      slug: Slugify('Kinslie Plain Cold Shoulder Mini Dress'),
      category: {
        connect: {
          id: category.id
        }
      },
      images: {
        create: [{
          url: 'https://imager-next.freetls.fastly.net/images/resized/480/6ad9306d-5fcc-4b85-b92c-343a62c79719',
          description: ''
        }]
      }
    },
    {
      title: "HALA Grettel Batik Kerut Muslim Dress",
      description: "Sunt culpa id pariatur et. Commodo incididunt ex excepteur fugiat voluptate voluptate nisi commodo deserunt reprehenderit non aliquip.",
      price: "189.000",
      brand: "HALA",
      material: "Cotton",
      slug: Slugify('HALA Grettel Batik Kerut Muslim Dress'),
      category: {
        connect: {
          id: category.id
        }
      },
      images: {
        create: [{
          url: 'https://imager-next.freetls.fastly.net/images/resized/480/e79e8e90-c0d2-4dd3-9128-33ce7f2e9a56',
          description: ''
        },
        {
          url: 'https://imager-next.freetls.fastly.net/images/resized/480/0d6e0756-837f-4e0c-b9d6-3f69cf5a13ed',
          description: ''
        },
        {
          url: 'https://imager-next.freetls.fastly.net/images/resized/480/55d60850-fded-4226-a853-6a17fe34c752',
          description: ''
        },
        {
          url: 'https://imager-next.freetls.fastly.net/images/resized/480/7c8992d0-9d08-4c2e-96d4-5a6bd43c781c',
          description: ''
        },
        {
          url: 'https://imager-next.freetls.fastly.net/images/resized/480/c8f8c2f6-e9e8-4c29-afe6-7524973b037b',
          description: ''
        },
        {
          url: 'https://imager-next.freetls.fastly.net/images/resized/480/de5db3c8-29ff-4cdc-965c-73de576b5b40',
          description: ''
        }]
      }
    },
    {
      title: "HALA Jossie Flowery Kerut Maxi Dress",
      description: "Sunt culpa id pariatur et. Commodo incididunt ex excepteur fugiat voluptate voluptate nisi commodo deserunt reprehenderit non aliquip.",
      price: "229.000",
      brand: "HALA",
      material: "Satin",
      slug: Slugify('HALA Jossie Flowery Kerut Maxi Dress'),
      category: {
        connect: {
          id: category.id
        }
      },
      images: {
        create: [{
          url: 'https://imager-next.freetls.fastly.net/images/resized/480/953c94c4-0dfc-4185-ba45-5bbacc122782',
          description: ''
        },
        {
          url: 'https://imager-next.freetls.fastly.net/images/resized/480/48c0fd09-9c9e-4d95-be70-b89ba8d5f6ef',
          description: ''
        },
        {
          url: 'https://imager-next.freetls.fastly.net/images/resized/480/1ac8e8fc-2c0b-494d-a51e-cb8d17ff6468',
          description: ''
        },
        {
          url: 'https://imager-next.freetls.fastly.net/images/resized/480/d2f3c8fc-ad75-4d1e-8ddf-b708435c1518',
          description: ''
        },
        {
          url: 'https://imager-next.freetls.fastly.net/images/resized/480/2254f80a-15f9-42ca-b6b8-a56335a282a3',
          description: ''
        },
        {
          url: 'https://imager-next.freetls.fastly.net/images/resized/480/9d3e1f73-dd81-49fb-a5e3-361f3ba4a980',
          description: ''
        },
        {
          url: 'https://imager-next.freetls.fastly.net/images/resized/480/354fa864-ece1-4981-bdd8-e2a0713109ca',
          description: ''
        }]
      }
    },
    {
      title: "Monserrath Batik Bodycon Midi Dress",
      description: "Sunt culpa id pariatur et. Commodo incididunt ex excepteur fugiat voluptate voluptate nisi commodo deserunt reprehenderit non aliquip.",
      price: "149.000",
      brand: "Monserrath",
      material: "Cotton",
      slug: Slugify('Monserrath Batik Bodycon Midi Dress'),
      category: {
        connect: {
          id: category.id
        }
      },
      images: {
        create: [{
          url: 'https://imager-next.freetls.fastly.net/images/resized/480/b67e0172-6082-474e-bc75-15e695ec849a',
          description: ''
        }]
      }
    },
    {
      title: "Yushita Batik Cold Shoulder Midi Dress",
      description: "Sunt culpa id pariatur et. Commodo incididunt ex excepteur fugiat voluptate voluptate nisi commodo deserunt reprehenderit non aliquip.",
      price: "159.000",
      brand: "Yushita",
      material: "Cotton",
      slug: Slugify('Yushita Batik Cold Shoulder Midi Dresss'),
      category: {
        connect: {
          id: category.id
        }
      },
      images: {
        create: [{
          url: 'https://imager-next.freetls.fastly.net/images/resized/480/96d54eea-d44f-4cfb-9732-f464b4e7d587',
          description: ''
        }]
      }
    },
    {
      title: "Ivette Batik Collar Mini Dress",
      description: "Sunt culpa id pariatur et. Commodo incididunt ex excepteur fugiat voluptate voluptate nisi commodo deserunt reprehenderit non aliquip.",
      price: "149.000",
      brand: "Ivette",
      material: "Cotton",
      slug: Slugify('Ivette Batik Collar Mini Dress'),
      category: {
        connect: {
          id: category.id
        }
      },
      images: {
        create: [{
          url: 'https://imager-next.freetls.fastly.net/images/resized/480/0c540359-08a2-45c9-9a0c-775609addfc5',
          description: ''
        }]
      }
    },
    {
      title: "Averey Stripes Simple Mini Dress",
      description: "Sunt culpa id pariatur et. Commodo incididunt ex excepteur fugiat voluptate voluptate nisi commodo deserunt reprehenderit non aliquip.",
      price: "159.000",
      brand: "Averey",
      material: "Organza",
      slug: Slugify('Averey Stripes Simple Mini Dress'),
      category: {
        connect: {
          id: category.id
        }
      },
      images: {
        create: [{
          url: 'https://imager-next.freetls.fastly.net/images/resized/480/c0cea9ba-7c72-4209-9d22-1d19d384aec1',
          description: ''
        }]
      }
    }
  ]


  products.map(async (product) => {
    await prisma.createProduct({ ...product })
  })


}

main().catch(e => console.error(e))

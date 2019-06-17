/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */






declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  CategoryCreateInput: { // input type
    id?: string | null; // ID
    title?: string | null; // String
  }
  CategoryCreateOneInput: { // input type
    connect?: NexusGenInputs['CategoryWhereUniqueInput'] | null; // CategoryWhereUniqueInput
    create?: NexusGenInputs['CategoryCreateInput'] | null; // CategoryCreateInput
  }
  CategoryUpdateDataInput: { // input type
    title?: string | null; // String
  }
  CategoryUpdateOneRequiredInput: { // input type
    connect?: NexusGenInputs['CategoryWhereUniqueInput'] | null; // CategoryWhereUniqueInput
    create?: NexusGenInputs['CategoryCreateInput'] | null; // CategoryCreateInput
    update?: NexusGenInputs['CategoryUpdateDataInput'] | null; // CategoryUpdateDataInput
    upsert?: NexusGenInputs['CategoryUpsertNestedInput'] | null; // CategoryUpsertNestedInput
  }
  CategoryUpsertNestedInput: { // input type
    create: NexusGenInputs['CategoryCreateInput']; // CategoryCreateInput!
    update: NexusGenInputs['CategoryUpdateDataInput']; // CategoryUpdateDataInput!
  }
  CategoryWhereInput: { // input type
    AND?: NexusGenInputs['CategoryWhereInput'][] | null; // [CategoryWhereInput!]
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    NOT?: NexusGenInputs['CategoryWhereInput'][] | null; // [CategoryWhereInput!]
    OR?: NexusGenInputs['CategoryWhereInput'][] | null; // [CategoryWhereInput!]
    title?: string | null; // String
    title_contains?: string | null; // String
    title_ends_with?: string | null; // String
    title_gt?: string | null; // String
    title_gte?: string | null; // String
    title_in?: string[] | null; // [String!]
    title_lt?: string | null; // String
    title_lte?: string | null; // String
    title_not?: string | null; // String
    title_not_contains?: string | null; // String
    title_not_ends_with?: string | null; // String
    title_not_in?: string[] | null; // [String!]
    title_not_starts_with?: string | null; // String
    title_starts_with?: string | null; // String
  }
  CategoryWhereUniqueInput: { // input type
    id?: string | null; // ID
  }
  ImageCreateInput: { // input type
    description: string; // String!
    id?: string | null; // ID
    url: string; // String!
  }
  ImageCreateManyInput: { // input type
    connect?: NexusGenInputs['ImageWhereUniqueInput'][] | null; // [ImageWhereUniqueInput!]
    create?: NexusGenInputs['ImageCreateInput'][] | null; // [ImageCreateInput!]
  }
  ImageScalarWhereInput: { // input type
    AND?: NexusGenInputs['ImageScalarWhereInput'][] | null; // [ImageScalarWhereInput!]
    description?: string | null; // String
    description_contains?: string | null; // String
    description_ends_with?: string | null; // String
    description_gt?: string | null; // String
    description_gte?: string | null; // String
    description_in?: string[] | null; // [String!]
    description_lt?: string | null; // String
    description_lte?: string | null; // String
    description_not?: string | null; // String
    description_not_contains?: string | null; // String
    description_not_ends_with?: string | null; // String
    description_not_in?: string[] | null; // [String!]
    description_not_starts_with?: string | null; // String
    description_starts_with?: string | null; // String
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    NOT?: NexusGenInputs['ImageScalarWhereInput'][] | null; // [ImageScalarWhereInput!]
    OR?: NexusGenInputs['ImageScalarWhereInput'][] | null; // [ImageScalarWhereInput!]
    url?: string | null; // String
    url_contains?: string | null; // String
    url_ends_with?: string | null; // String
    url_gt?: string | null; // String
    url_gte?: string | null; // String
    url_in?: string[] | null; // [String!]
    url_lt?: string | null; // String
    url_lte?: string | null; // String
    url_not?: string | null; // String
    url_not_contains?: string | null; // String
    url_not_ends_with?: string | null; // String
    url_not_in?: string[] | null; // [String!]
    url_not_starts_with?: string | null; // String
    url_starts_with?: string | null; // String
  }
  ImageUpdateDataInput: { // input type
    description?: string | null; // String
    url?: string | null; // String
  }
  ImageUpdateManyDataInput: { // input type
    description?: string | null; // String
    url?: string | null; // String
  }
  ImageUpdateManyInput: { // input type
    connect?: NexusGenInputs['ImageWhereUniqueInput'][] | null; // [ImageWhereUniqueInput!]
    create?: NexusGenInputs['ImageCreateInput'][] | null; // [ImageCreateInput!]
    delete?: NexusGenInputs['ImageWhereUniqueInput'][] | null; // [ImageWhereUniqueInput!]
    deleteMany?: NexusGenInputs['ImageScalarWhereInput'][] | null; // [ImageScalarWhereInput!]
    disconnect?: NexusGenInputs['ImageWhereUniqueInput'][] | null; // [ImageWhereUniqueInput!]
    set?: NexusGenInputs['ImageWhereUniqueInput'][] | null; // [ImageWhereUniqueInput!]
    update?: NexusGenInputs['ImageUpdateWithWhereUniqueNestedInput'][] | null; // [ImageUpdateWithWhereUniqueNestedInput!]
    updateMany?: NexusGenInputs['ImageUpdateManyWithWhereNestedInput'][] | null; // [ImageUpdateManyWithWhereNestedInput!]
    upsert?: NexusGenInputs['ImageUpsertWithWhereUniqueNestedInput'][] | null; // [ImageUpsertWithWhereUniqueNestedInput!]
  }
  ImageUpdateManyWithWhereNestedInput: { // input type
    data: NexusGenInputs['ImageUpdateManyDataInput']; // ImageUpdateManyDataInput!
    where: NexusGenInputs['ImageScalarWhereInput']; // ImageScalarWhereInput!
  }
  ImageUpdateWithWhereUniqueNestedInput: { // input type
    data: NexusGenInputs['ImageUpdateDataInput']; // ImageUpdateDataInput!
    where: NexusGenInputs['ImageWhereUniqueInput']; // ImageWhereUniqueInput!
  }
  ImageUpsertWithWhereUniqueNestedInput: { // input type
    create: NexusGenInputs['ImageCreateInput']; // ImageCreateInput!
    update: NexusGenInputs['ImageUpdateDataInput']; // ImageUpdateDataInput!
    where: NexusGenInputs['ImageWhereUniqueInput']; // ImageWhereUniqueInput!
  }
  ImageWhereInput: { // input type
    AND?: NexusGenInputs['ImageWhereInput'][] | null; // [ImageWhereInput!]
    description?: string | null; // String
    description_contains?: string | null; // String
    description_ends_with?: string | null; // String
    description_gt?: string | null; // String
    description_gte?: string | null; // String
    description_in?: string[] | null; // [String!]
    description_lt?: string | null; // String
    description_lte?: string | null; // String
    description_not?: string | null; // String
    description_not_contains?: string | null; // String
    description_not_ends_with?: string | null; // String
    description_not_in?: string[] | null; // [String!]
    description_not_starts_with?: string | null; // String
    description_starts_with?: string | null; // String
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    NOT?: NexusGenInputs['ImageWhereInput'][] | null; // [ImageWhereInput!]
    OR?: NexusGenInputs['ImageWhereInput'][] | null; // [ImageWhereInput!]
    url?: string | null; // String
    url_contains?: string | null; // String
    url_ends_with?: string | null; // String
    url_gt?: string | null; // String
    url_gte?: string | null; // String
    url_in?: string[] | null; // [String!]
    url_lt?: string | null; // String
    url_lte?: string | null; // String
    url_not?: string | null; // String
    url_not_contains?: string | null; // String
    url_not_ends_with?: string | null; // String
    url_not_in?: string[] | null; // [String!]
    url_not_starts_with?: string | null; // String
    url_starts_with?: string | null; // String
  }
  ImageWhereUniqueInput: { // input type
    id?: string | null; // ID
  }
  ProductCreateInput: { // input type
    brand: string; // String!
    category: NexusGenInputs['CategoryCreateOneInput']; // CategoryCreateOneInput!
    description: string; // String!
    id?: string | null; // ID
    images?: NexusGenInputs['ImageCreateManyInput'] | null; // ImageCreateManyInput
    material: string; // String!
    price: string; // String!
    slug: string; // String!
    title: string; // String!
  }
  ProductUpdateInput: { // input type
    brand?: string | null; // String
    category?: NexusGenInputs['CategoryUpdateOneRequiredInput'] | null; // CategoryUpdateOneRequiredInput
    description?: string | null; // String
    images?: NexusGenInputs['ImageUpdateManyInput'] | null; // ImageUpdateManyInput
    material?: string | null; // String
    price?: string | null; // String
    slug?: string | null; // String
    title?: string | null; // String
  }
  ProductWhereInput: { // input type
    AND?: NexusGenInputs['ProductWhereInput'][] | null; // [ProductWhereInput!]
    brand?: string | null; // String
    brand_contains?: string | null; // String
    brand_ends_with?: string | null; // String
    brand_gt?: string | null; // String
    brand_gte?: string | null; // String
    brand_in?: string[] | null; // [String!]
    brand_lt?: string | null; // String
    brand_lte?: string | null; // String
    brand_not?: string | null; // String
    brand_not_contains?: string | null; // String
    brand_not_ends_with?: string | null; // String
    brand_not_in?: string[] | null; // [String!]
    brand_not_starts_with?: string | null; // String
    brand_starts_with?: string | null; // String
    category?: NexusGenInputs['CategoryWhereInput'] | null; // CategoryWhereInput
    description?: string | null; // String
    description_contains?: string | null; // String
    description_ends_with?: string | null; // String
    description_gt?: string | null; // String
    description_gte?: string | null; // String
    description_in?: string[] | null; // [String!]
    description_lt?: string | null; // String
    description_lte?: string | null; // String
    description_not?: string | null; // String
    description_not_contains?: string | null; // String
    description_not_ends_with?: string | null; // String
    description_not_in?: string[] | null; // [String!]
    description_not_starts_with?: string | null; // String
    description_starts_with?: string | null; // String
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    images_every?: NexusGenInputs['ImageWhereInput'] | null; // ImageWhereInput
    images_none?: NexusGenInputs['ImageWhereInput'] | null; // ImageWhereInput
    images_some?: NexusGenInputs['ImageWhereInput'] | null; // ImageWhereInput
    material?: string | null; // String
    material_contains?: string | null; // String
    material_ends_with?: string | null; // String
    material_gt?: string | null; // String
    material_gte?: string | null; // String
    material_in?: string[] | null; // [String!]
    material_lt?: string | null; // String
    material_lte?: string | null; // String
    material_not?: string | null; // String
    material_not_contains?: string | null; // String
    material_not_ends_with?: string | null; // String
    material_not_in?: string[] | null; // [String!]
    material_not_starts_with?: string | null; // String
    material_starts_with?: string | null; // String
    NOT?: NexusGenInputs['ProductWhereInput'][] | null; // [ProductWhereInput!]
    OR?: NexusGenInputs['ProductWhereInput'][] | null; // [ProductWhereInput!]
    price?: string | null; // String
    price_contains?: string | null; // String
    price_ends_with?: string | null; // String
    price_gt?: string | null; // String
    price_gte?: string | null; // String
    price_in?: string[] | null; // [String!]
    price_lt?: string | null; // String
    price_lte?: string | null; // String
    price_not?: string | null; // String
    price_not_contains?: string | null; // String
    price_not_ends_with?: string | null; // String
    price_not_in?: string[] | null; // [String!]
    price_not_starts_with?: string | null; // String
    price_starts_with?: string | null; // String
    slug?: string | null; // String
    slug_contains?: string | null; // String
    slug_ends_with?: string | null; // String
    slug_gt?: string | null; // String
    slug_gte?: string | null; // String
    slug_in?: string[] | null; // [String!]
    slug_lt?: string | null; // String
    slug_lte?: string | null; // String
    slug_not?: string | null; // String
    slug_not_contains?: string | null; // String
    slug_not_ends_with?: string | null; // String
    slug_not_in?: string[] | null; // [String!]
    slug_not_starts_with?: string | null; // String
    slug_starts_with?: string | null; // String
    title?: string | null; // String
    title_contains?: string | null; // String
    title_ends_with?: string | null; // String
    title_gt?: string | null; // String
    title_gte?: string | null; // String
    title_in?: string[] | null; // [String!]
    title_lt?: string | null; // String
    title_lte?: string | null; // String
    title_not?: string | null; // String
    title_not_contains?: string | null; // String
    title_not_ends_with?: string | null; // String
    title_not_in?: string[] | null; // [String!]
    title_not_starts_with?: string | null; // String
    title_starts_with?: string | null; // String
  }
  ProductWhereUniqueInput: { // input type
    id?: string | null; // ID
    slug?: string | null; // String
  }
  UserWhereInput: { // input type
    AND?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    email?: string | null; // String
    email_contains?: string | null; // String
    email_ends_with?: string | null; // String
    email_gt?: string | null; // String
    email_gte?: string | null; // String
    email_in?: string[] | null; // [String!]
    email_lt?: string | null; // String
    email_lte?: string | null; // String
    email_not?: string | null; // String
    email_not_contains?: string | null; // String
    email_not_ends_with?: string | null; // String
    email_not_in?: string[] | null; // [String!]
    email_not_starts_with?: string | null; // String
    email_starts_with?: string | null; // String
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    name?: string | null; // String
    name_contains?: string | null; // String
    name_ends_with?: string | null; // String
    name_gt?: string | null; // String
    name_gte?: string | null; // String
    name_in?: string[] | null; // [String!]
    name_lt?: string | null; // String
    name_lte?: string | null; // String
    name_not?: string | null; // String
    name_not_contains?: string | null; // String
    name_not_ends_with?: string | null; // String
    name_not_in?: string[] | null; // [String!]
    name_not_starts_with?: string | null; // String
    name_starts_with?: string | null; // String
    NOT?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    OR?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
  }
  UserWhereUniqueInput: { // input type
    email?: string | null; // String
    id?: string | null; // ID
  }
}

export interface NexusGenEnums {
  CategoryOrderByInput: "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "title_ASC" | "title_DESC" | "updatedAt_ASC" | "updatedAt_DESC"
  ImageOrderByInput: "createdAt_ASC" | "createdAt_DESC" | "description_ASC" | "description_DESC" | "id_ASC" | "id_DESC" | "updatedAt_ASC" | "updatedAt_DESC" | "url_ASC" | "url_DESC"
  ProductOrderByInput: "brand_ASC" | "brand_DESC" | "createdAt_ASC" | "createdAt_DESC" | "description_ASC" | "description_DESC" | "id_ASC" | "id_DESC" | "material_ASC" | "material_DESC" | "price_ASC" | "price_DESC" | "slug_ASC" | "slug_DESC" | "title_ASC" | "title_DESC" | "updatedAt_ASC" | "updatedAt_DESC"
  UserOrderByInput: "createdAt_ASC" | "createdAt_DESC" | "email_ASC" | "email_DESC" | "id_ASC" | "id_DESC" | "name_ASC" | "name_DESC" | "updatedAt_ASC" | "updatedAt_DESC"
}

export interface NexusGenRootTypes {
  AggregateCategory: { // root type
    count: number; // Int!
  }
  AggregateImage: { // root type
    count: number; // Int!
  }
  AggregateProduct: { // root type
    count: number; // Int!
  }
  AggregateUser: { // root type
    count: number; // Int!
  }
  Category: { // root type
    id: string; // ID!
    title?: string | null; // String
  }
  CategoryConnection: { // root type
    edges: NexusGenRootTypes['CategoryEdge'][]; // [CategoryEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  CategoryEdge: { // root type
    cursor: string; // String!
    node: NexusGenRootTypes['Category']; // Category!
  }
  Image: { // root type
    description: string; // String!
    id: string; // ID!
    url: string; // String!
  }
  ImageConnection: { // root type
    edges: NexusGenRootTypes['ImageEdge'][]; // [ImageEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  ImageEdge: { // root type
    cursor: string; // String!
    node: NexusGenRootTypes['Image']; // Image!
  }
  Mutation: {};
  PageInfo: { // root type
    endCursor?: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor?: string | null; // String
  }
  Product: { // root type
    brand: string; // String!
    description: string; // String!
    id: string; // ID!
    material: string; // String!
    price: string; // String!
    slug: string; // String!
    title: string; // String!
  }
  ProductConnection: { // root type
    edges: NexusGenRootTypes['ProductEdge'][]; // [ProductEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  ProductEdge: { // root type
    cursor: string; // String!
    node: NexusGenRootTypes['Product']; // Product!
  }
  Query: {};
  User: { // root type
    email?: string | null; // String
    id: string; // ID!
    name: string; // String!
  }
  UserConnection: { // root type
    edges: NexusGenRootTypes['UserEdge'][]; // [UserEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  UserEdge: { // root type
    cursor: string; // String!
    node: NexusGenRootTypes['User']; // User!
  }
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  CategoryCreateInput: NexusGenInputs['CategoryCreateInput'];
  CategoryCreateOneInput: NexusGenInputs['CategoryCreateOneInput'];
  CategoryUpdateDataInput: NexusGenInputs['CategoryUpdateDataInput'];
  CategoryUpdateOneRequiredInput: NexusGenInputs['CategoryUpdateOneRequiredInput'];
  CategoryUpsertNestedInput: NexusGenInputs['CategoryUpsertNestedInput'];
  CategoryWhereInput: NexusGenInputs['CategoryWhereInput'];
  CategoryWhereUniqueInput: NexusGenInputs['CategoryWhereUniqueInput'];
  ImageCreateInput: NexusGenInputs['ImageCreateInput'];
  ImageCreateManyInput: NexusGenInputs['ImageCreateManyInput'];
  ImageScalarWhereInput: NexusGenInputs['ImageScalarWhereInput'];
  ImageUpdateDataInput: NexusGenInputs['ImageUpdateDataInput'];
  ImageUpdateManyDataInput: NexusGenInputs['ImageUpdateManyDataInput'];
  ImageUpdateManyInput: NexusGenInputs['ImageUpdateManyInput'];
  ImageUpdateManyWithWhereNestedInput: NexusGenInputs['ImageUpdateManyWithWhereNestedInput'];
  ImageUpdateWithWhereUniqueNestedInput: NexusGenInputs['ImageUpdateWithWhereUniqueNestedInput'];
  ImageUpsertWithWhereUniqueNestedInput: NexusGenInputs['ImageUpsertWithWhereUniqueNestedInput'];
  ImageWhereInput: NexusGenInputs['ImageWhereInput'];
  ImageWhereUniqueInput: NexusGenInputs['ImageWhereUniqueInput'];
  ProductCreateInput: NexusGenInputs['ProductCreateInput'];
  ProductUpdateInput: NexusGenInputs['ProductUpdateInput'];
  ProductWhereInput: NexusGenInputs['ProductWhereInput'];
  ProductWhereUniqueInput: NexusGenInputs['ProductWhereUniqueInput'];
  UserWhereInput: NexusGenInputs['UserWhereInput'];
  UserWhereUniqueInput: NexusGenInputs['UserWhereUniqueInput'];
  CategoryOrderByInput: NexusGenEnums['CategoryOrderByInput'];
  ImageOrderByInput: NexusGenEnums['ImageOrderByInput'];
  ProductOrderByInput: NexusGenEnums['ProductOrderByInput'];
  UserOrderByInput: NexusGenEnums['UserOrderByInput'];
}

export interface NexusGenFieldTypes {
  AggregateCategory: { // field return type
    count: number; // Int!
  }
  AggregateImage: { // field return type
    count: number; // Int!
  }
  AggregateProduct: { // field return type
    count: number; // Int!
  }
  AggregateUser: { // field return type
    count: number; // Int!
  }
  Category: { // field return type
    id: string; // ID!
    title: string | null; // String
  }
  CategoryConnection: { // field return type
    aggregate: NexusGenRootTypes['AggregateCategory']; // AggregateCategory!
    edges: NexusGenRootTypes['CategoryEdge'][]; // [CategoryEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  CategoryEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['Category']; // Category!
  }
  Image: { // field return type
    description: string; // String!
    id: string; // ID!
    url: string; // String!
  }
  ImageConnection: { // field return type
    aggregate: NexusGenRootTypes['AggregateImage']; // AggregateImage!
    edges: NexusGenRootTypes['ImageEdge'][]; // [ImageEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  ImageEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['Image']; // Image!
  }
  Mutation: { // field return type
    createProduct: NexusGenRootTypes['Product']; // Product!
    deleteProduct: NexusGenRootTypes['Product'] | null; // Product
    updateProduct: NexusGenRootTypes['Product'] | null; // Product
  }
  PageInfo: { // field return type
    endCursor: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor: string | null; // String
  }
  Product: { // field return type
    brand: string; // String!
    category: NexusGenRootTypes['Category']; // Category!
    description: string; // String!
    id: string; // ID!
    images: NexusGenRootTypes['Image'][] | null; // [Image!]
    material: string; // String!
    price: string; // String!
    slug: string; // String!
    title: string; // String!
  }
  ProductConnection: { // field return type
    aggregate: NexusGenRootTypes['AggregateProduct']; // AggregateProduct!
    edges: NexusGenRootTypes['ProductEdge'][]; // [ProductEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  ProductEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['Product']; // Product!
  }
  Query: { // field return type
    categories: NexusGenRootTypes['Category'][]; // [Category!]!
    categoriesConnection: NexusGenRootTypes['CategoryConnection']; // CategoryConnection!
    category: NexusGenRootTypes['Category'] | null; // Category
    image: NexusGenRootTypes['Image'] | null; // Image
    images: NexusGenRootTypes['Image'][]; // [Image!]!
    imagesConnection: NexusGenRootTypes['ImageConnection']; // ImageConnection!
    product: NexusGenRootTypes['Product'] | null; // Product
    products: NexusGenRootTypes['Product'][]; // [Product!]!
    productsConnection: NexusGenRootTypes['ProductConnection']; // ProductConnection!
    user: NexusGenRootTypes['User'] | null; // User
    users: NexusGenRootTypes['User'][]; // [User!]!
    usersConnection: NexusGenRootTypes['UserConnection']; // UserConnection!
  }
  User: { // field return type
    email: string | null; // String
    id: string; // ID!
    name: string; // String!
  }
  UserConnection: { // field return type
    aggregate: NexusGenRootTypes['AggregateUser']; // AggregateUser!
    edges: NexusGenRootTypes['UserEdge'][]; // [UserEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  UserEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['User']; // User!
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createProduct: { // args
      data: NexusGenInputs['ProductCreateInput']; // ProductCreateInput!
    }
    deleteProduct: { // args
      where: NexusGenInputs['ProductWhereUniqueInput']; // ProductWhereUniqueInput!
    }
    updateProduct: { // args
      data: NexusGenInputs['ProductUpdateInput']; // ProductUpdateInput!
      where: NexusGenInputs['ProductWhereUniqueInput']; // ProductWhereUniqueInput!
    }
  }
  Product: {
    images: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['ImageOrderByInput'] | null; // ImageOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['ImageWhereInput'] | null; // ImageWhereInput
    }
  }
  Query: {
    categories: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['CategoryOrderByInput'] | null; // CategoryOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['CategoryWhereInput'] | null; // CategoryWhereInput
    }
    categoriesConnection: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['CategoryOrderByInput'] | null; // CategoryOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['CategoryWhereInput'] | null; // CategoryWhereInput
    }
    category: { // args
      where: NexusGenInputs['CategoryWhereUniqueInput']; // CategoryWhereUniqueInput!
    }
    image: { // args
      where: NexusGenInputs['ImageWhereUniqueInput']; // ImageWhereUniqueInput!
    }
    images: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['ImageOrderByInput'] | null; // ImageOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['ImageWhereInput'] | null; // ImageWhereInput
    }
    imagesConnection: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['ImageOrderByInput'] | null; // ImageOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['ImageWhereInput'] | null; // ImageWhereInput
    }
    product: { // args
      where: NexusGenInputs['ProductWhereUniqueInput']; // ProductWhereUniqueInput!
    }
    products: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['ProductOrderByInput'] | null; // ProductOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['ProductWhereInput'] | null; // ProductWhereInput
    }
    productsConnection: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['ProductOrderByInput'] | null; // ProductOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['ProductWhereInput'] | null; // ProductWhereInput
    }
    user: { // args
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    users: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['UserOrderByInput'] | null; // UserOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
    usersConnection: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['UserOrderByInput'] | null; // UserOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "AggregateCategory" | "AggregateImage" | "AggregateProduct" | "AggregateUser" | "Category" | "CategoryConnection" | "CategoryEdge" | "Image" | "ImageConnection" | "ImageEdge" | "Mutation" | "PageInfo" | "Product" | "ProductConnection" | "ProductEdge" | "Query" | "User" | "UserConnection" | "UserEdge";

export type NexusGenInputNames = "CategoryCreateInput" | "CategoryCreateOneInput" | "CategoryUpdateDataInput" | "CategoryUpdateOneRequiredInput" | "CategoryUpsertNestedInput" | "CategoryWhereInput" | "CategoryWhereUniqueInput" | "ImageCreateInput" | "ImageCreateManyInput" | "ImageScalarWhereInput" | "ImageUpdateDataInput" | "ImageUpdateManyDataInput" | "ImageUpdateManyInput" | "ImageUpdateManyWithWhereNestedInput" | "ImageUpdateWithWhereUniqueNestedInput" | "ImageUpsertWithWhereUniqueNestedInput" | "ImageWhereInput" | "ImageWhereUniqueInput" | "ProductCreateInput" | "ProductUpdateInput" | "ProductWhereInput" | "ProductWhereUniqueInput" | "UserWhereInput" | "UserWhereUniqueInput";

export type NexusGenEnumNames = "CategoryOrderByInput" | "ImageOrderByInput" | "ProductOrderByInput" | "UserOrderByInput";

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}
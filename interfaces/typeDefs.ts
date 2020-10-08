export const typeDefs = `
""""""
directive @mark(
  """Marks if field is localized"""
  localized: Boolean

  """Marks if value is default"""
  default: Boolean

  """Marks if the locale is a part of the default fallback"""
  fallback: Boolean

  """Ordered list of fallback locales"""
  fallbackLocales: [String!]

  """Marks the pageInfo"""
  pageInfo: Boolean

  """Marks an aggregate type"""
  aggregate: Boolean

  """Marks a countable type"""
  countable: Boolean

  """Marks an edge type"""
  edge: Boolean

  """Marks a locale enum"""
  locale: Boolean

  """Marks asset url handler"""
  url: Boolean

  """Marks type of mutation kind"""
  mutationKind: _MutationKind

  """Marks kind of mutation input field"""
  mutationInputFieldKind: _MutationInputFieldKind

  """Marks filter and links to parent type"""
  filter: String

  """Marks filter kind"""
  filterKind: _FilterKind

  """Marks if corresponding field is list"""
  filterIsList: Boolean

  """Marks order by"""
  order: Boolean

  """Marks order direction"""
  orderDirection: _OrderDirection

  """Link to the Main type of the connection"""
  connection: String

  """Marks localizations field"""
  localizations: Boolean

  """Marks versions field on model"""
  modelVersions: Boolean

  """Marks document version field on Query"""
  documentVersion: Boolean

  """Marks stages field"""
  stages: Boolean

  """Specifies system createdAt field"""
  createdAtField: String

  """Specifies system updatedAt field"""
  updatedAtField: String

  """Specifies relation input kind"""
  relationInputKind: _RelationInputKind

  """
  Specifies relation kind (e.g. union relation or regular field relation)
  """
  relationKind: _RelationKind

  """Specifies relation input cardinality"""
  relationInputCardinality: _RelationInputCardinality

  """Specifies relation input cardinality of reverse side"""
  reverseRelationInputCardinality: _RelationInputCardinality

  """Specifies model create input type"""
  createInputType: String

  """Specifies model create localization type"""
  createLocalizationInputType: String

  """Specifies GraphCMS field type"""
  fieldType: String

  """Specifies WhereUniqueInput type name"""
  whereUniqueInput: String

  """Specifies whether type is connect input"""
  isConnectInput: Boolean

  """
  Specifies relation input to be for abstract member type, not known master / origin side
  """
  isMemberInput: Boolean

  """Specifies union type name"""
  unionType: Boolean

  """Specifies model a type is part of"""
  model: String

  """Specifies mode of system DateTime fields"""
  systemDateTimeFieldVariation: _SystemDateTimeFieldVariation

  """
  If versioned, documents of this model will be able to hold this amount of versions per stage
  """
  versionRetentionCount: Int

  """If versioned, on publishing versions older than x days will be dropped"""
  versionRetentionPeriod: Int

  """Adds field validations"""
  validations: String

  """The model's storage ID"""
  storageId: String
) on OBJECT | FIELD_DEFINITION | ENUM_VALUE | ENUM | INPUT_FIELD_DEFINITION | INPUT_OBJECT | ARGUMENT_DEFINITION

""""""
directive @psql(
  """postgres table name"""
  table: String

  """postgres localization table name"""
  localizationTable: String

  """postgres column name"""
  column: [String!]

  """hardcoded postgres id value for enums"""
  id: String

  """postgres join on name"""
  join: [String!]

  """Specifies column for system id field"""
  idColumn: String

  """Specifies column for native sorting for relational fields"""
  prio: String

  """Specifies columns for union member fields"""
  memberColumns: [String!]

  """Specifies system updatedAt column"""
  updatedAtColumn: String
) on OBJECT | FIELD_DEFINITION | ENUM_VALUE | INPUT_FIELD_DEFINITION | ENUM | INPUT_OBJECT | ARGUMENT_DEFINITION

""""""
directive @permission(
  """
  is usage of that field allowed if not overwritten will also be set for subfields
  """
  allowed: Boolean

  """stages that are allowed to be used by this subtree"""
  allowedStages: [Locale!]
) on FIELD_DEFINITION

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String

  """Number of items in the current page."""
  pageSize: Int
}

"""Identifies documents"""
input AssetManyWhereInput {
  """Contains search across all appropriate fields."""
  _search: String

  """Logical AND on all given filters."""
  AND: [AssetWhereInput!]

  """Logical OR on all given filters."""
  OR: [AssetWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AssetWhereInput!]

  """"""
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string"""
  id_not_ends_with: ID

  """"""
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime

  """"""
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime

  """"""
  publishedAt: DateTime

  """All values that are not equal to given value."""
  publishedAt_not: DateTime

  """All values that are contained in given list."""
  publishedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  publishedAt_not_in: [DateTime!]

  """All values less than the given value."""
  publishedAt_lt: DateTime

  """All values less than or equal the given value."""
  publishedAt_lte: DateTime

  """All values greater than the given value."""
  publishedAt_gt: DateTime

  """All values greater than or equal the given value."""
  publishedAt_gte: DateTime

  """"""
  accountAvatar_every: AccountWhereInput

  """"""
  accountAvatar_some: AccountWhereInput

  """"""
  accountAvatar_none: AccountWhereInput

  """"""
  postImages_every: PostWhereInput

  """"""
  postImages_some: PostWhereInput

  """"""
  postImages_none: PostWhereInput
}

""""""
scalar RGBAHue

""""""
input DocumentOutputInput {
  """
  Transforms a document into a desired file type.
  See this matrix for format support:
  
  PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
  DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
  DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
  ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
  XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
  XLSX:	jpg, pdf, ods, png, svg, xls, and webp
  ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
  PPT:	jpg, odp, pdf, png, svg, pptx, and webp
  PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
  ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
  BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
  GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
  JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
  PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
  WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
  TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
  AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
  PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
  SVG:	jpg, odp, ods, odt, pdf, png, and webp
  HTML:	jpg, odt, pdf, svg, txt, and webp
  TXT:	jpg, html, odt, pdf, svg, and webp
  """
  format: DocumentFileTypes
}

"""Asset system model"""
type Asset implements Node {
  """System stage field"""
  stage: Stage!

  """System Locale field"""
  locale: Locale!

  """Get the other localizations for this document"""
  localizations(
    """Potential locales that should be returned"""
    locales: [Locale!]! = [en]

    """Decides if the current locale should be included or not"""
    includeCurrent: Boolean! = false
  ): [Asset!]!

  """Get the document in other stages"""
  documentInStages(
    """Potential stages that should be returned"""
    stages: [Stage!]! = [PUBLISHED, DRAFT]

    """Decides if the current stage should be included or not"""
    includeCurrent: Boolean! = false

    """
    Decides if the documents should match the parent documents locale or should use the fallback order defined in the tree
    """
    inheritLocale: Boolean! = false
  ): [Asset!]!

  """The unique identifier"""
  id: ID!

  """The time the document was created"""
  createdAt(
    """
    Variation of DateTime field to return, allows value from base document, current localization, or combined by returning the newer value of both
    """
    variation: SystemDateTimeFieldVariation! = COMBINED
  ): DateTime!

  """The time the document was updated"""
  updatedAt(
    """
    Variation of DateTime field to return, allows value from base document, current localization, or combined by returning the newer value of both
    """
    variation: SystemDateTimeFieldVariation! = COMBINED
  ): DateTime!

  """The time the document was published. Null on documents in draft stage."""
  publishedAt(
    """
    Variation of DateTime field to return, allows value from base document, current localization, or combined by returning the newer value of both
    """
    variation: SystemDateTimeFieldVariation! = COMBINED
  ): DateTime

  """The file handle"""
  handle: String!

  """The file name"""
  fileName: String!

  """The height of the file"""
  height: Float

  """The file width"""
  width: Float

  """The file size"""
  size: Float

  """The mime type of the file"""
  mimeType: String

  """"""
  accountAvatar(
    """"""
    where: AccountWhereInput

    """"""
    orderBy: AccountOrderByInput

    """"""
    skip: Int

    """"""
    after: String

    """"""
    before: String

    """"""
    first: Int

    """"""
    last: Int

    """
    Allows to optionally override locale filtering behaviour in the query's subtree.
    
    Note that \`accountAvatar\` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
    For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
    
    This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
    """
    locales: [Locale!]
  ): [Account!]!

  """"""
  postImages(
    """"""
    where: PostWhereInput

    """"""
    orderBy: PostOrderByInput

    """"""
    skip: Int

    """"""
    after: String

    """"""
    before: String

    """"""
    first: Int

    """"""
    last: Int

    """
    Allows to optionally override locale filtering behaviour in the query's subtree.
    
    Note that \`postImages\` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
    For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
    
    This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
    """
    locales: [Locale!]
  ): [Post!]!

  """List of Asset versions"""
  history(
    """"""
    limit: Int! = 10

    """"""
    skip: Int! = 0

    """
    This is optional and can be used to fetch the document version history for a specific stage instead of the current one
    """
    stageOverride: Stage
  ): [Version!]!

  """Get the url for the asset with provided transformations applied."""
  url(transformation: AssetTransformationInput): String!
}

""""""
type Mutation {
  """Create one account"""
  createAccount(data: AccountCreateInput!): Account

  """Update one account"""
  updateAccount(where: AccountWhereUniqueInput!, data: AccountUpdateInput!): Account

  """
  Delete one account from _all_ existing stages. Returns deleted document.
  """
  deleteAccount(
    """Document to delete"""
    where: AccountWhereUniqueInput!
  ): Account

  """Upsert one account"""
  upsertAccount(where: AccountWhereUniqueInput!, upsert: AccountUpsertInput!): Account

  """Publish one account"""
  publishAccount(
    """Document to publish"""
    where: AccountWhereUniqueInput!

    """Publishing target stage"""
    to: [Stage!]! = [PUBLISHED]
  ): Account

  """
  Unpublish one account from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only.
  """
  unpublishAccount(
    """Document to unpublish"""
    where: AccountWhereUniqueInput!

    """Stages to unpublish document from"""
    from: [Stage!]! = [PUBLISHED]
  ): Account

  """Update many Account documents"""
  updateManyAccountsConnection(
    """Documents to apply update on"""
    where: AccountManyWhereInput

    """Updates to document content"""
    data: AccountUpdateManyInput!

    """"""
    skip: Int

    """"""
    first: Int

    """"""
    last: Int

    """"""
    before: ID

    """"""
    after: ID
  ): AccountConnection!

  """Delete many Account documents, return deleted documents"""
  deleteManyAccountsConnection(
    """Documents to delete"""
    where: AccountManyWhereInput

    """"""
    skip: Int

    """"""
    first: Int

    """"""
    last: Int

    """"""
    before: ID

    """"""
    after: ID
  ): AccountConnection!

  """Publish many Account documents"""
  publishManyAccountsConnection(
    """Identifies documents in each stage to be published"""
    where: AccountManyWhereInput

    """Stage to find matching documents in"""
    from: Stage = DRAFT

    """Stages to publish documents to"""
    to: [Stage!]! = [PUBLISHED]

    """"""
    skip: Int

    """"""
    first: Int

    """"""
    last: Int

    """"""
    before: ID

    """"""
    after: ID
  ): AccountConnection!

  """
  Find many Account documents that match criteria in specified stage and unpublish from target stages
  """
  unpublishManyAccountsConnection(
    """Identifies documents in draft stage"""
    where: AccountManyWhereInput

    """Stage to find matching documents in"""
    stage: Stage = DRAFT

    """Stages to unpublish documents from"""
    from: [Stage!]! = [PUBLISHED]

    """"""
    skip: Int

    """"""
    first: Int

    """"""
    last: Int

    """"""
    before: ID

    """"""
    after: ID
  ): AccountConnection!

  """Update many accounts"""
  updateManyAccounts(
    """Documents to apply update on"""
    where: AccountManyWhereInput

    """Updates to document content"""
    data: AccountUpdateManyInput!
  ): BatchPayload! @deprecated(reason: "Please use the new paginated many mutation (updateManyAccountsConnection)")

  """Delete many Account documents"""
  deleteManyAccounts(
    """Documents to delete"""
    where: AccountManyWhereInput
  ): BatchPayload! @deprecated(reason: "Please use the new paginated many mutation (deleteManyAccountsConnection)")

  """Publish many Account documents"""
  publishManyAccounts(
    """Identifies documents in each stage to be published"""
    where: AccountManyWhereInput

    """Stages to publish documents to"""
    to: [Stage!]! = [PUBLISHED]
  ): BatchPayload! @deprecated(reason: "Please use the new paginated many mutation (publishManyAccountsConnection)")

  """Unpublish many Account documents"""
  unpublishManyAccounts(
    """Identifies documents in each stage"""
    where: AccountManyWhereInput

    """Stages to unpublish documents from"""
    from: [Stage!]! = [PUBLISHED]
  ): BatchPayload! @deprecated(reason: "Please use the new paginated many mutation (unpublishManyAccountsConnection)")

  """Create one asset"""
  createAsset(data: AssetCreateInput!): Asset @deprecated(reason: "Asset mutations will be overhauled soon")

  """Update one asset"""
  updateAsset(where: AssetWhereUniqueInput!, data: AssetUpdateInput!): Asset

  """Delete one asset from _all_ existing stages. Returns deleted document."""
  deleteAsset(
    """Document to delete"""
    where: AssetWhereUniqueInput!
  ): Asset

  """Upsert one asset"""
  upsertAsset(where: AssetWhereUniqueInput!, upsert: AssetUpsertInput!): Asset

  """Publish one asset"""
  publishAsset(
    """Document to publish"""
    where: AssetWhereUniqueInput!

    """Optional localizations to publish"""
    locales: [Locale!]

    """
    Publish base document including default localization and relations, as well as selected additional localizations. Returns document in mutation stage.
    """
    publishBase: Boolean = true

    """Publishing target stage"""
    to: [Stage!]! = [PUBLISHED]
  ): Asset

  """
  Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only.
  """
  unpublishAsset(
    """Document to unpublish"""
    where: AssetWhereUniqueInput!

    """Stages to unpublish document from"""
    from: [Stage!]! = [PUBLISHED]

    """
    Optional locales to unpublish. Unpublishing the default locale will completely remove the document from the selected stages
    """
    locales: [Locale!]

    """
    Unpublish complete document including default localization and relations from stages. Can be disabled.
    """
    unpublishBase: Boolean = true
  ): Asset

  """Update many Asset documents"""
  updateManyAssetsConnection(
    """Documents to apply update on"""
    where: AssetManyWhereInput

    """Updates to document content"""
    data: AssetUpdateManyInput!

    """"""
    skip: Int

    """"""
    first: Int

    """"""
    last: Int

    """"""
    before: ID

    """"""
    after: ID
  ): AssetConnection!

  """Delete many Asset documents, return deleted documents"""
  deleteManyAssetsConnection(
    """Documents to delete"""
    where: AssetManyWhereInput

    """"""
    skip: Int

    """"""
    first: Int

    """"""
    last: Int

    """"""
    before: ID

    """"""
    after: ID
  ): AssetConnection!

  """Publish many Asset documents"""
  publishManyAssetsConnection(
    """Identifies documents in each stage to be published"""
    where: AssetManyWhereInput

    """Stage to find matching documents in"""
    from: Stage = DRAFT

    """Stages to publish documents to"""
    to: [Stage!]! = [PUBLISHED]

    """"""
    skip: Int

    """"""
    first: Int

    """"""
    last: Int

    """"""
    before: ID

    """"""
    after: ID

    """Document localizations to publish"""
    locales: [Locale!]

    """Whether to publish the base document and default localization"""
    publishBase: Boolean = true
  ): AssetConnection!

  """
  Find many Asset documents that match criteria in specified stage and unpublish from target stages
  """
  unpublishManyAssetsConnection(
    """Identifies documents in draft stage"""
    where: AssetManyWhereInput

    """Stage to find matching documents in"""
    stage: Stage = DRAFT

    """Stages to unpublish documents from"""
    from: [Stage!]! = [PUBLISHED]

    """"""
    skip: Int

    """"""
    first: Int

    """"""
    last: Int

    """"""
    before: ID

    """"""
    after: ID

    """Locales to unpublish"""
    locales: [Locale!]

    """Whether to unpublish the base document and default localization"""
    unpublishBase: Boolean = true
  ): AssetConnection!

  """Update many assets"""
  updateManyAssets(
    """Documents to apply update on"""
    where: AssetManyWhereInput

    """Updates to document content"""
    data: AssetUpdateManyInput!
  ): BatchPayload! @deprecated(reason: "Please use the new paginated many mutation (updateManyAssetsConnection)")

  """Delete many Asset documents"""
  deleteManyAssets(
    """Documents to delete"""
    where: AssetManyWhereInput
  ): BatchPayload! @deprecated(reason: "Please use the new paginated many mutation (deleteManyAssetsConnection)")

  """Publish many Asset documents"""
  publishManyAssets(
    """Identifies documents in each stage to be published"""
    where: AssetManyWhereInput

    """Stages to publish documents to"""
    to: [Stage!]! = [PUBLISHED]

    """Document localizations to publish"""
    locales: [Locale!]

    """Whether to publish the base document and default localization"""
    publishBase: Boolean = true
  ): BatchPayload! @deprecated(reason: "Please use the new paginated many mutation (publishManyAssetsConnection)")

  """Unpublish many Asset documents"""
  unpublishManyAssets(
    """Identifies documents in each stage"""
    where: AssetManyWhereInput

    """Stages to unpublish documents from"""
    from: [Stage!]! = [PUBLISHED]

    """Locales to unpublish"""
    locales: [Locale!]

    """Whether to unpublish the base document and default localization"""
    unpublishBase: Boolean = true
  ): BatchPayload! @deprecated(reason: "Please use the new paginated many mutation (unpublishManyAssetsConnection)")

  """Create one comment"""
  createComment(data: CommentCreateInput!): Comment

  """Update one comment"""
  updateComment(where: CommentWhereUniqueInput!, data: CommentUpdateInput!): Comment

  """
  Delete one comment from _all_ existing stages. Returns deleted document.
  """
  deleteComment(
    """Document to delete"""
    where: CommentWhereUniqueInput!
  ): Comment

  """Upsert one comment"""
  upsertComment(where: CommentWhereUniqueInput!, upsert: CommentUpsertInput!): Comment

  """Publish one comment"""
  publishComment(
    """Document to publish"""
    where: CommentWhereUniqueInput!

    """Publishing target stage"""
    to: [Stage!]! = [PUBLISHED]
  ): Comment

  """
  Unpublish one comment from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only.
  """
  unpublishComment(
    """Document to unpublish"""
    where: CommentWhereUniqueInput!

    """Stages to unpublish document from"""
    from: [Stage!]! = [PUBLISHED]
  ): Comment

  """Update many Comment documents"""
  updateManyCommentsConnection(
    """Documents to apply update on"""
    where: CommentManyWhereInput

    """Updates to document content"""
    data: CommentUpdateManyInput!

    """"""
    skip: Int

    """"""
    first: Int

    """"""
    last: Int

    """"""
    before: ID

    """"""
    after: ID
  ): CommentConnection!

  """Delete many Comment documents, return deleted documents"""
  deleteManyCommentsConnection(
    """Documents to delete"""
    where: CommentManyWhereInput

    """"""
    skip: Int

    """"""
    first: Int

    """"""
    last: Int

    """"""
    before: ID

    """"""
    after: ID
  ): CommentConnection!

  """Publish many Comment documents"""
  publishManyCommentsConnection(
    """Identifies documents in each stage to be published"""
    where: CommentManyWhereInput

    """Stage to find matching documents in"""
    from: Stage = DRAFT

    """Stages to publish documents to"""
    to: [Stage!]! = [PUBLISHED]

    """"""
    skip: Int

    """"""
    first: Int

    """"""
    last: Int

    """"""
    before: ID

    """"""
    after: ID
  ): CommentConnection!

  """
  Find many Comment documents that match criteria in specified stage and unpublish from target stages
  """
  unpublishManyCommentsConnection(
    """Identifies documents in draft stage"""
    where: CommentManyWhereInput

    """Stage to find matching documents in"""
    stage: Stage = DRAFT

    """Stages to unpublish documents from"""
    from: [Stage!]! = [PUBLISHED]

    """"""
    skip: Int

    """"""
    first: Int

    """"""
    last: Int

    """"""
    before: ID

    """"""
    after: ID
  ): CommentConnection!

  """Update many comments"""
  updateManyComments(
    """Documents to apply update on"""
    where: CommentManyWhereInput

    """Updates to document content"""
    data: CommentUpdateManyInput!
  ): BatchPayload! @deprecated(reason: "Please use the new paginated many mutation (updateManyCommentsConnection)")

  """Delete many Comment documents"""
  deleteManyComments(
    """Documents to delete"""
    where: CommentManyWhereInput
  ): BatchPayload! @deprecated(reason: "Please use the new paginated many mutation (deleteManyCommentsConnection)")

  """Publish many Comment documents"""
  publishManyComments(
    """Identifies documents in each stage to be published"""
    where: CommentManyWhereInput

    """Stages to publish documents to"""
    to: [Stage!]! = [PUBLISHED]
  ): BatchPayload! @deprecated(reason: "Please use the new paginated many mutation (publishManyCommentsConnection)")

  """Unpublish many Comment documents"""
  unpublishManyComments(
    """Identifies documents in each stage"""
    where: CommentManyWhereInput

    """Stages to unpublish documents from"""
    from: [Stage!]! = [PUBLISHED]
  ): BatchPayload! @deprecated(reason: "Please use the new paginated many mutation (unpublishManyCommentsConnection)")

  """Create one post"""
  createPost(data: PostCreateInput!): Post

  """Update one post"""
  updatePost(where: PostWhereUniqueInput!, data: PostUpdateInput!): Post

  """Delete one post from _all_ existing stages. Returns deleted document."""
  deletePost(
    """Document to delete"""
    where: PostWhereUniqueInput!
  ): Post

  """Upsert one post"""
  upsertPost(where: PostWhereUniqueInput!, upsert: PostUpsertInput!): Post

  """Publish one post"""
  publishPost(
    """Document to publish"""
    where: PostWhereUniqueInput!

    """Publishing target stage"""
    to: [Stage!]! = [PUBLISHED]
  ): Post

  """
  Unpublish one post from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only.
  """
  unpublishPost(
    """Document to unpublish"""
    where: PostWhereUniqueInput!

    """Stages to unpublish document from"""
    from: [Stage!]! = [PUBLISHED]
  ): Post

  """Update many Post documents"""
  updateManyPostsConnection(
    """Documents to apply update on"""
    where: PostManyWhereInput

    """Updates to document content"""
    data: PostUpdateManyInput!

    """"""
    skip: Int

    """"""
    first: Int

    """"""
    last: Int

    """"""
    before: ID

    """"""
    after: ID
  ): PostConnection!

  """Delete many Post documents, return deleted documents"""
  deleteManyPostsConnection(
    """Documents to delete"""
    where: PostManyWhereInput

    """"""
    skip: Int

    """"""
    first: Int

    """"""
    last: Int

    """"""
    before: ID

    """"""
    after: ID
  ): PostConnection!

  """Publish many Post documents"""
  publishManyPostsConnection(
    """Identifies documents in each stage to be published"""
    where: PostManyWhereInput

    """Stage to find matching documents in"""
    from: Stage = DRAFT

    """Stages to publish documents to"""
    to: [Stage!]! = [PUBLISHED]

    """"""
    skip: Int

    """"""
    first: Int

    """"""
    last: Int

    """"""
    before: ID

    """"""
    after: ID
  ): PostConnection!

  """
  Find many Post documents that match criteria in specified stage and unpublish from target stages
  """
  unpublishManyPostsConnection(
    """Identifies documents in draft stage"""
    where: PostManyWhereInput

    """Stage to find matching documents in"""
    stage: Stage = DRAFT

    """Stages to unpublish documents from"""
    from: [Stage!]! = [PUBLISHED]

    """"""
    skip: Int

    """"""
    first: Int

    """"""
    last: Int

    """"""
    before: ID

    """"""
    after: ID
  ): PostConnection!

  """Update many posts"""
  updateManyPosts(
    """Documents to apply update on"""
    where: PostManyWhereInput

    """Updates to document content"""
    data: PostUpdateManyInput!
  ): BatchPayload! @deprecated(reason: "Please use the new paginated many mutation (updateManyPostsConnection)")

  """Delete many Post documents"""
  deleteManyPosts(
    """Documents to delete"""
    where: PostManyWhereInput
  ): BatchPayload! @deprecated(reason: "Please use the new paginated many mutation (deleteManyPostsConnection)")

  """Publish many Post documents"""
  publishManyPosts(
    """Identifies documents in each stage to be published"""
    where: PostManyWhereInput

    """Stages to publish documents to"""
    to: [Stage!]! = [PUBLISHED]
  ): BatchPayload! @deprecated(reason: "Please use the new paginated many mutation (publishManyPostsConnection)")

  """Unpublish many Post documents"""
  unpublishManyPosts(
    """Identifies documents in each stage"""
    where: PostManyWhereInput

    """Stages to unpublish documents from"""
    from: [Stage!]! = [PUBLISHED]
  ): BatchPayload! @deprecated(reason: "Please use the new paginated many mutation (unpublishManyPostsConnection)")
}

"""
Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba()
"""
input RGBAInput {
  """"""
  r: RGBAHue!

  """"""
  g: RGBAHue!

  """"""
  b: RGBAHue!

  """"""
  a: RGBATransparency!
}

""""""
input VersionWhereInput {
  """"""
  id: ID!

  """"""
  stage: Stage!

  """"""
  revision: Int!
}

""""""
input AssetUpdateInput {
  """"""
  handle: String

  """"""
  fileName: String

  """"""
  height: Float

  """"""
  width: Float

  """"""
  size: Float

  """"""
  mimeType: String

  """"""
  accountAvatar: AccountUpdateManyInlineInput

  """"""
  postImages: PostUpdateManyInlineInput

  """Manage document localizations"""
  localizations: AssetUpdateLocalizationsInput
}

"""A connection to a list of items."""
type CommentConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CommentEdge!]!

  """"""
  aggregate: Aggregate!
}

""""""
input AccountUpdateOneInlineInput {
  """Create and connect one Account document"""
  create: AccountCreateInput

  """Update single Account document"""
  update: AccountUpdateWithNestedWhereUniqueInput

  """Upsert single Account document"""
  upsert: AccountUpsertWithNestedWhereUniqueInput

  """Connect existing Account document"""
  connect: AccountWhereUniqueInput

  """Disconnect currently connected Account document"""
  disconnect: Boolean

  """Delete currently connected Account document"""
  delete: Boolean
}

"""Slate-compatible RichText AST"""
scalar RichTextAST

"""Identifies documents"""
input CommentWhereInput {
  """Contains search across all appropriate fields."""
  _search: String

  """Logical AND on all given filters."""
  AND: [CommentWhereInput!]

  """Logical OR on all given filters."""
  OR: [CommentWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CommentWhereInput!]

  """"""
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string"""
  id_not_ends_with: ID

  """"""
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime

  """"""
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime

  """"""
  publishedAt: DateTime

  """All values that are not equal to given value."""
  publishedAt_not: DateTime

  """All values that are contained in given list."""
  publishedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  publishedAt_not_in: [DateTime!]

  """All values less than the given value."""
  publishedAt_lt: DateTime

  """All values less than or equal the given value."""
  publishedAt_lte: DateTime

  """All values greater than the given value."""
  publishedAt_gt: DateTime

  """All values greater than or equal the given value."""
  publishedAt_gte: DateTime

  """"""
  creator: AccountWhereInput

  """"""
  content: String

  """All values that are not equal to given value."""
  content_not: String

  """All values that are contained in given list."""
  content_in: [String!]

  """All values that are not contained in given list."""
  content_not_in: [String!]

  """All values containing the given string."""
  content_contains: String

  """All values not containing the given string."""
  content_not_contains: String

  """All values starting with the given string."""
  content_starts_with: String

  """All values not starting with the given string."""
  content_not_starts_with: String

  """All values ending with the given string."""
  content_ends_with: String

  """All values not ending with the given string"""
  content_not_ends_with: String
}

""""""
input PostUpdateInput {
  """"""
  content: RichTextAST

  """"""
  images: AssetUpdateManyInlineInput

  """"""
  creator: AccountUpdateOneInlineInput
}

""""""
input AccountUpsertInput {
  """Create document if it didn't exist"""
  create: AccountCreateInput!

  """Update document if it exists"""
  update: AccountUpdateInput!
}

""""""
input AccountCreateManyInlineInput {
  """Create and connect multiple existing Account documents"""
  create: [AccountCreateInput!]

  """Connect multiple existing Account documents"""
  connect: [AccountWhereUniqueInput!]
}

"""An edge in a connection."""
type AssetEdge {
  """The item at the end of the edge."""
  node: Asset!

  """A cursor for use in pagination."""
  cursor: String!
}

""""""
input AssetUpdateManyInlineInput {
  """Create and connect multiple Asset documents"""
  create: [AssetCreateInput!]

  """Connect multiple existing Asset documents"""
  connect: [AssetConnectInput!]

  """
  Override currently-connected documents with multiple existing Asset documents
  """
  set: [AssetWhereUniqueInput!]

  """Update multiple Asset documents"""
  update: [AssetUpdateWithNestedWhereUniqueInput!]

  """Upsert multiple Asset documents"""
  upsert: [AssetUpsertWithNestedWhereUniqueInput!]

  """Disconnect multiple Asset documents"""
  disconnect: [AssetWhereUniqueInput!]

  """Delete multiple Asset documents"""
  delete: [AssetWhereUniqueInput!]
}

""""""
input PostUpdateManyInput {
  """"""
  content: RichTextAST
}

"""
Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used.
"""
input ColorInput {
  """"""
  hex: Hex

  """"""
  rgba: RGBAInput
}

""""""
input AccountCreateInput {
  """"""
  createdAt: DateTime

  """"""
  updatedAt: DateTime

  """"""
  firstName: String!

  """"""
  middleName: String

  """"""
  lastName: String!

  """"""
  emailAddress: String!

  """"""
  password: String!

  """"""
  birthdate: Date

  """"""
  avatar: AssetCreateOneInlineInput

  """"""
  gender: Gender!

  """"""
  country: String

  """"""
  city: String

  """"""
  comment: CommentCreateOneInlineInput

  """"""
  post: PostCreateOneInlineInput
}

""""""
input AssetCreateInput {
  """"""
  createdAt: DateTime

  """"""
  updatedAt: DateTime

  """"""
  handle: String!

  """"""
  fileName: String!

  """"""
  height: Float

  """"""
  width: Float

  """"""
  size: Float

  """"""
  mimeType: String

  """"""
  accountAvatar: AccountCreateManyInlineInput

  """"""
  postImages: PostCreateManyInlineInput

  """
  Inline mutations for managing document localizations excluding the default locale
  """
  localizations: AssetCreateLocalizationsInput
}

"""A connection to a list of items."""
type PostConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PostEdge!]!

  """"""
  aggregate: Aggregate!
}

""""""
scalar RGBATransparency

"""Stage system enumeration"""
enum Stage {
  """The Published stage is where you can publish your content to."""
  PUBLISHED

  """The Draft is the default stage for all your content."""
  DRAFT
}

""""""
input AccountUpdateManyWithNestedWhereInput {
  """Document search"""
  where: AccountWhereInput!

  """Update many input"""
  data: AccountUpdateManyInput!
}

""""""
input AssetUpdateManyLocalizationInput {
  """"""
  data: AssetUpdateManyLocalizationDataInput!

  """"""
  locale: Locale!
}

"""Input for a geolocation point with latitude and longitude"""
input LocationInput {
  """"""
  latitude: Float!

  """"""
  longitude: Float!
}

"""References Comment record uniquely"""
input CommentWhereUniqueInput {
  """"""
  id: ID
}

""""""
input PostConnectInput {
  """Document to connect"""
  where: PostWhereUniqueInput!

  """
  Allow to specify document position in list of connected documents, will default to appending at end of list
  """
  position: ConnectPositionInput
}

""""""
input PostUpsertWithNestedWhereUniqueInput {
  """Unique document search"""
  where: PostWhereUniqueInput!

  """Upsert data"""
  data: PostUpsertInput!
}

""""""
input PostUpdateOneInlineInput {
  """Create and connect one Post document"""
  create: PostCreateInput

  """Update single Post document"""
  update: PostUpdateWithNestedWhereUniqueInput

  """Upsert single Post document"""
  upsert: PostUpsertWithNestedWhereUniqueInput

  """Connect existing Post document"""
  connect: PostWhereUniqueInput

  """Disconnect currently connected Post document"""
  disconnect: Boolean

  """Delete currently connected Post document"""
  delete: Boolean
}

""""""
input ConnectPositionInput {
  """Connect document after specified document"""
  after: ID

  """Connect document before specified document"""
  before: ID

  """Connect document at first position"""
  start: Boolean

  """Connect document at last position"""
  end: Boolean
}

""""""
input AccountUpdateWithNestedWhereUniqueInput {
  """Unique document search"""
  where: AccountWhereUniqueInput!

  """Document to update"""
  data: AccountUpdateInput!
}

""""""
input AssetUpdateLocalizationsInput {
  """Localizations to create"""
  create: [AssetCreateLocalizationInput!]

  """Localizations to update"""
  update: [AssetUpdateLocalizationInput!]

  """"""
  upsert: [AssetUpsertLocalizationInput!]

  """Localizations to delete"""
  delete: [Locale!]
}

"""Identifies documents"""
input CommentManyWhereInput {
  """Contains search across all appropriate fields."""
  _search: String

  """Logical AND on all given filters."""
  AND: [CommentWhereInput!]

  """Logical OR on all given filters."""
  OR: [CommentWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CommentWhereInput!]

  """"""
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string"""
  id_not_ends_with: ID

  """"""
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime

  """"""
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime

  """"""
  publishedAt: DateTime

  """All values that are not equal to given value."""
  publishedAt_not: DateTime

  """All values that are contained in given list."""
  publishedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  publishedAt_not_in: [DateTime!]

  """All values less than the given value."""
  publishedAt_lt: DateTime

  """All values less than or equal the given value."""
  publishedAt_lte: DateTime

  """All values greater than the given value."""
  publishedAt_gt: DateTime

  """All values greater than or equal the given value."""
  publishedAt_gte: DateTime

  """"""
  creator: AccountWhereInput

  """"""
  content: String

  """All values that are not equal to given value."""
  content_not: String

  """All values that are contained in given list."""
  content_in: [String!]

  """All values that are not contained in given list."""
  content_not_in: [String!]

  """All values containing the given string."""
  content_contains: String

  """All values not containing the given string."""
  content_not_contains: String

  """All values starting with the given string."""
  content_starts_with: String

  """All values not starting with the given string."""
  content_not_starts_with: String

  """All values ending with the given string."""
  content_ends_with: String

  """All values not ending with the given string"""
  content_not_ends_with: String
}

""""""
input PostUpdateManyWithNestedWhereInput {
  """Document search"""
  where: PostWhereInput!

  """Update many input"""
  data: PostUpdateManyInput!
}

"""
Representing a color value comprising of HEX, RGBA and css color values
"""
type Color {
  """"""
  hex: Hex!

  """"""
  rgba: RGBA!

  """"""
  css: String!
}

""""""
input AssetUpdateManyLocalizationsInput {
  """Localizations to update"""
  update: [AssetUpdateManyLocalizationInput!]
}

""""""
input AssetCreateManyInlineInput {
  """Create and connect multiple existing Asset documents"""
  create: [AssetCreateInput!]

  """Connect multiple existing Asset documents"""
  connect: [AssetWhereUniqueInput!]
}

""""""
input CommentUpdateOneInlineInput {
  """Create and connect one Comment document"""
  create: CommentCreateInput

  """Update single Comment document"""
  update: CommentUpdateWithNestedWhereUniqueInput

  """Upsert single Comment document"""
  upsert: CommentUpsertWithNestedWhereUniqueInput

  """Connect existing Comment document"""
  connect: CommentWhereUniqueInput

  """Disconnect currently connected Comment document"""
  disconnect: Boolean

  """Delete currently connected Comment document"""
  delete: Boolean
}

""""""
enum _MutationKind {
  """"""
  create

  """"""
  publish

  """"""
  unpublish

  """"""
  update

  """"""
  upsert

  """"""
  delete

  """"""
  updateMany

  """"""
  publishMany

  """"""
  unpublishMany

  """"""
  deleteMany
}

"""Representing a geolocation point with latitude and longitude"""
type Location {
  """"""
  latitude: Float!

  """"""
  longitude: Float!

  """"""
  distance(from: LocationInput!): Float!
}

""""""
input PostUpdateManyInlineInput {
  """Create and connect multiple Post documents"""
  create: [PostCreateInput!]

  """Connect multiple existing Post documents"""
  connect: [PostConnectInput!]

  """
  Override currently-connected documents with multiple existing Post documents
  """
  set: [PostWhereUniqueInput!]

  """Update multiple Post documents"""
  update: [PostUpdateWithNestedWhereUniqueInput!]

  """Upsert multiple Post documents"""
  upsert: [PostUpsertWithNestedWhereUniqueInput!]

  """Disconnect multiple Post documents"""
  disconnect: [PostWhereUniqueInput!]

  """Delete multiple Post documents"""
  delete: [PostWhereUniqueInput!]
}

""""""
type Query {
  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!

    """"""
    stage: Stage! = PUBLISHED

    """
    Defines which locales should be returned.
    
    Note that \`Node\` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
    For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
    
    This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
    """
    locales: [Locale!]! = [en]
  ): Node

  """Retrieve multiple accounts"""
  accounts(
    """"""
    where: AccountWhereInput

    """"""
    orderBy: AccountOrderByInput

    """"""
    skip: Int

    """"""
    after: String

    """"""
    before: String

    """"""
    first: Int

    """"""
    last: Int

    """"""
    stage: Stage! = PUBLISHED

    """
    Defines which locales should be returned.
    
    Note that \`Account\` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
    For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
    
    This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
    """
    locales: [Locale!]! = [en]
  ): [Account!]!

  """Retrieve a single account"""
  account(
    """"""
    where: AccountWhereUniqueInput!

    """"""
    stage: Stage! = PUBLISHED

    """
    Defines which locales should be returned.
    
    Note that \`Account\` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
    For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
    
    This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
    """
    locales: [Locale!]! = [en]
  ): Account

  """Retrieve multiple accounts using the Relay connection interface"""
  accountsConnection(
    """"""
    where: AccountWhereInput

    """"""
    orderBy: AccountOrderByInput

    """"""
    skip: Int

    """"""
    after: String

    """"""
    before: String

    """"""
    first: Int

    """"""
    last: Int

    """"""
    stage: Stage! = PUBLISHED

    """
    Defines which locales should be returned.
    
    Note that \`Account\` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
    For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
    
    This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
    """
    locales: [Locale!]! = [en]
  ): AccountConnection!

  """Retrieve document version"""
  accountVersion(where: VersionWhereInput!): DocumentVersion

  """Retrieve multiple assets"""
  assets(
    """"""
    where: AssetWhereInput

    """"""
    orderBy: AssetOrderByInput

    """"""
    skip: Int

    """"""
    after: String

    """"""
    before: String

    """"""
    first: Int

    """"""
    last: Int

    """"""
    stage: Stage! = PUBLISHED

    """
    Defines which locales should be returned.
    
    Note that \`Asset\` will be affected directly by this argument, as well as any other related models with localized fields in the query's subtree.
    The first locale matching the provided list will be returned, entries with non matching locales will be filtered out.
    
    This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
    """
    locales: [Locale!]! = [en]
  ): [Asset!]!

  """Retrieve a single asset"""
  asset(
    """"""
    where: AssetWhereUniqueInput!

    """"""
    stage: Stage! = PUBLISHED

    """
    Defines which locales should be returned.
    
    Note that \`Asset\` will be affected directly by this argument, as well as any other related models with localized fields in the query's subtree.
    The first locale matching the provided list will be returned, entries with non matching locales will be filtered out.
    
    This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
    """
    locales: [Locale!]! = [en]
  ): Asset

  """Retrieve multiple assets using the Relay connection interface"""
  assetsConnection(
    """"""
    where: AssetWhereInput

    """"""
    orderBy: AssetOrderByInput

    """"""
    skip: Int

    """"""
    after: String

    """"""
    before: String

    """"""
    first: Int

    """"""
    last: Int

    """"""
    stage: Stage! = PUBLISHED

    """
    Defines which locales should be returned.
    
    Note that \`Asset\` will be affected directly by this argument, as well as any other related models with localized fields in the query's subtree.
    The first locale matching the provided list will be returned, entries with non matching locales will be filtered out.
    
    This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
    """
    locales: [Locale!]! = [en]
  ): AssetConnection!

  """Retrieve document version"""
  assetVersion(where: VersionWhereInput!): DocumentVersion

  """Retrieve multiple comments"""
  comments(
    """"""
    where: CommentWhereInput

    """"""
    orderBy: CommentOrderByInput

    """"""
    skip: Int

    """"""
    after: String

    """"""
    before: String

    """"""
    first: Int

    """"""
    last: Int

    """"""
    stage: Stage! = PUBLISHED

    """
    Defines which locales should be returned.
    
    Note that \`Comment\` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
    For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
    
    This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
    """
    locales: [Locale!]! = [en]
  ): [Comment!]!

  """Retrieve a single comment"""
  comment(
    """"""
    where: CommentWhereUniqueInput!

    """"""
    stage: Stage! = PUBLISHED

    """
    Defines which locales should be returned.
    
    Note that \`Comment\` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
    For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
    
    This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
    """
    locales: [Locale!]! = [en]
  ): Comment

  """Retrieve multiple comments using the Relay connection interface"""
  commentsConnection(
    """"""
    where: CommentWhereInput

    """"""
    orderBy: CommentOrderByInput

    """"""
    skip: Int

    """"""
    after: String

    """"""
    before: String

    """"""
    first: Int

    """"""
    last: Int

    """"""
    stage: Stage! = PUBLISHED

    """
    Defines which locales should be returned.
    
    Note that \`Comment\` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
    For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
    
    This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
    """
    locales: [Locale!]! = [en]
  ): CommentConnection!

  """Retrieve document version"""
  commentVersion(where: VersionWhereInput!): DocumentVersion

  """Retrieve multiple posts"""
  posts(
    """"""
    where: PostWhereInput

    """"""
    orderBy: PostOrderByInput

    """"""
    skip: Int

    """"""
    after: String

    """"""
    before: String

    """"""
    first: Int

    """"""
    last: Int

    """"""
    stage: Stage! = PUBLISHED

    """
    Defines which locales should be returned.
    
    Note that \`Post\` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
    For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
    
    This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
    """
    locales: [Locale!]! = [en]
  ): [Post!]!

  """Retrieve a single post"""
  post(
    """"""
    where: PostWhereUniqueInput!

    """"""
    stage: Stage! = PUBLISHED

    """
    Defines which locales should be returned.
    
    Note that \`Post\` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
    For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
    
    This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
    """
    locales: [Locale!]! = [en]
  ): Post

  """Retrieve multiple posts using the Relay connection interface"""
  postsConnection(
    """"""
    where: PostWhereInput

    """"""
    orderBy: PostOrderByInput

    """"""
    skip: Int

    """"""
    after: String

    """"""
    before: String

    """"""
    first: Int

    """"""
    last: Int

    """"""
    stage: Stage! = PUBLISHED

    """
    Defines which locales should be returned.
    
    Note that \`Post\` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
    For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
    
    This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
    """
    locales: [Locale!]! = [en]
  ): PostConnection!

  """Retrieve document version"""
  postVersion(where: VersionWhereInput!): DocumentVersion
}

""""""
enum _RelationInputCardinality {
  """"""
  one

  """"""
  many
}

""""""
input AssetCreateLocalizationsInput {
  """Create localizations for the newly-created document"""
  create: [AssetCreateLocalizationInput!]
}

""""""
enum _RelationKind {
  """"""
  regular

  """"""
  union
}

""""""
input AccountCreateOneInlineInput {
  """Create and connect one Account document"""
  create: AccountCreateInput

  """Connect one existing Account document"""
  connect: AccountWhereUniqueInput
}

""""""
input AssetUpdateLocalizationInput {
  """"""
  data: AssetUpdateLocalizationDataInput!

  """"""
  locale: Locale!
}

"""An edge in a connection."""
type CommentEdge {
  """The item at the end of the edge."""
  node: Comment!

  """A cursor for use in pagination."""
  cursor: String!
}

""""""
enum CommentOrderByInput {
  """"""
  id_ASC

  """"""
  id_DESC

  """"""
  createdAt_ASC

  """"""
  createdAt_DESC

  """"""
  updatedAt_ASC

  """"""
  updatedAt_DESC

  """"""
  publishedAt_ASC

  """"""
  publishedAt_DESC

  """"""
  content_ASC

  """"""
  content_DESC
}

""""""
input CommentUpsertInput {
  """Create document if it didn't exist"""
  create: CommentCreateInput!

  """Update document if it exists"""
  update: CommentUpdateInput!
}

""""""
input CommentUpdateManyWithNestedWhereInput {
  """Document search"""
  where: CommentWhereInput!

  """Update many input"""
  data: CommentUpdateManyInput!
}

"""
A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar.
"""
scalar DateTime

"""Transformations for Images"""
input ImageTransformationInput {
  """Resizes the image"""
  resize: ImageResizeInput
}

""""""
input PostCreateInput {
  """"""
  createdAt: DateTime

  """"""
  updatedAt: DateTime

  """"""
  content: RichTextAST!

  """"""
  images: AssetCreateManyInlineInput

  """"""
  creator: AccountCreateOneInlineInput
}

"""Identifies documents"""
input AccountWhereInput {
  """Contains search across all appropriate fields."""
  _search: String

  """Logical AND on all given filters."""
  AND: [AccountWhereInput!]

  """Logical OR on all given filters."""
  OR: [AccountWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AccountWhereInput!]

  """"""
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string"""
  id_not_ends_with: ID

  """"""
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime

  """"""
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime

  """"""
  publishedAt: DateTime

  """All values that are not equal to given value."""
  publishedAt_not: DateTime

  """All values that are contained in given list."""
  publishedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  publishedAt_not_in: [DateTime!]

  """All values less than the given value."""
  publishedAt_lt: DateTime

  """All values less than or equal the given value."""
  publishedAt_lte: DateTime

  """All values greater than the given value."""
  publishedAt_gt: DateTime

  """All values greater than or equal the given value."""
  publishedAt_gte: DateTime

  """"""
  firstName: String

  """All values that are not equal to given value."""
  firstName_not: String

  """All values that are contained in given list."""
  firstName_in: [String!]

  """All values that are not contained in given list."""
  firstName_not_in: [String!]

  """All values containing the given string."""
  firstName_contains: String

  """All values not containing the given string."""
  firstName_not_contains: String

  """All values starting with the given string."""
  firstName_starts_with: String

  """All values not starting with the given string."""
  firstName_not_starts_with: String

  """All values ending with the given string."""
  firstName_ends_with: String

  """All values not ending with the given string"""
  firstName_not_ends_with: String

  """"""
  middleName: String

  """All values that are not equal to given value."""
  middleName_not: String

  """All values that are contained in given list."""
  middleName_in: [String!]

  """All values that are not contained in given list."""
  middleName_not_in: [String!]

  """All values containing the given string."""
  middleName_contains: String

  """All values not containing the given string."""
  middleName_not_contains: String

  """All values starting with the given string."""
  middleName_starts_with: String

  """All values not starting with the given string."""
  middleName_not_starts_with: String

  """All values ending with the given string."""
  middleName_ends_with: String

  """All values not ending with the given string"""
  middleName_not_ends_with: String

  """"""
  lastName: String

  """All values that are not equal to given value."""
  lastName_not: String

  """All values that are contained in given list."""
  lastName_in: [String!]

  """All values that are not contained in given list."""
  lastName_not_in: [String!]

  """All values containing the given string."""
  lastName_contains: String

  """All values not containing the given string."""
  lastName_not_contains: String

  """All values starting with the given string."""
  lastName_starts_with: String

  """All values not starting with the given string."""
  lastName_not_starts_with: String

  """All values ending with the given string."""
  lastName_ends_with: String

  """All values not ending with the given string"""
  lastName_not_ends_with: String

  """"""
  emailAddress: String

  """All values that are not equal to given value."""
  emailAddress_not: String

  """All values that are contained in given list."""
  emailAddress_in: [String!]

  """All values that are not contained in given list."""
  emailAddress_not_in: [String!]

  """All values containing the given string."""
  emailAddress_contains: String

  """All values not containing the given string."""
  emailAddress_not_contains: String

  """All values starting with the given string."""
  emailAddress_starts_with: String

  """All values not starting with the given string."""
  emailAddress_not_starts_with: String

  """All values ending with the given string."""
  emailAddress_ends_with: String

  """All values not ending with the given string"""
  emailAddress_not_ends_with: String

  """"""
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string"""
  password_not_ends_with: String

  """"""
  birthdate: Date

  """All values that are not equal to given value."""
  birthdate_not: Date

  """All values that are contained in given list."""
  birthdate_in: [Date!]

  """All values that are not contained in given list."""
  birthdate_not_in: [Date!]

  """All values less than the given value."""
  birthdate_lt: Date

  """All values less than or equal the given value."""
  birthdate_lte: Date

  """All values greater than the given value."""
  birthdate_gt: Date

  """All values greater than or equal the given value."""
  birthdate_gte: Date

  """"""
  avatar: AssetWhereInput

  """"""
  gender: Gender

  """All values that are not equal to given value."""
  gender_not: Gender

  """All values that are contained in given list."""
  gender_in: [Gender!]

  """All values that are not contained in given list."""
  gender_not_in: [Gender!]

  """"""
  country: String

  """All values that are not equal to given value."""
  country_not: String

  """All values that are contained in given list."""
  country_in: [String!]

  """All values that are not contained in given list."""
  country_not_in: [String!]

  """All values containing the given string."""
  country_contains: String

  """All values not containing the given string."""
  country_not_contains: String

  """All values starting with the given string."""
  country_starts_with: String

  """All values not starting with the given string."""
  country_not_starts_with: String

  """All values ending with the given string."""
  country_ends_with: String

  """All values not ending with the given string"""
  country_not_ends_with: String

  """"""
  city: String

  """All values that are not equal to given value."""
  city_not: String

  """All values that are contained in given list."""
  city_in: [String!]

  """All values that are not contained in given list."""
  city_not_in: [String!]

  """All values containing the given string."""
  city_contains: String

  """All values not containing the given string."""
  city_not_contains: String

  """All values starting with the given string."""
  city_starts_with: String

  """All values not starting with the given string."""
  city_not_starts_with: String

  """All values ending with the given string."""
  city_ends_with: String

  """All values not ending with the given string"""
  city_not_ends_with: String

  """"""
  comment: CommentWhereInput

  """"""
  post: PostWhereInput
}

""""""
input AccountUpdateManyInput {
  """"""
  middleName: String

  """"""
  lastName: String

  """"""
  password: String

  """"""
  birthdate: Date

  """"""
  gender: Gender

  """"""
  country: String

  """"""
  city: String
}

""""""
input AssetCreateLocalizationDataInput {
  """"""
  createdAt: DateTime

  """"""
  updatedAt: DateTime

  """"""
  handle: String!

  """"""
  fileName: String!

  """"""
  height: Float

  """"""
  width: Float

  """"""
  size: Float

  """"""
  mimeType: String
}

""""""
input CommentConnectInput {
  """Document to connect"""
  where: CommentWhereUniqueInput!

  """
  Allow to specify document position in list of connected documents, will default to appending at end of list
  """
  position: ConnectPositionInput
}

""""""
input PostCreateManyInlineInput {
  """Create and connect multiple existing Post documents"""
  create: [PostCreateInput!]

  """Connect multiple existing Post documents"""
  connect: [PostWhereUniqueInput!]
}

""""""
enum DocumentFileTypes {
  """"""
  jpg

  """"""
  odp

  """"""
  ods

  """"""
  odt

  """"""
  png

  """"""
  svg

  """"""
  txt

  """"""
  webp

  """"""
  docx

  """"""
  pdf

  """"""
  html

  """"""
  doc

  """"""
  xlsx

  """"""
  xls

  """"""
  pptx

  """"""
  ppt
}

""""""
enum AccountOrderByInput {
  """"""
  id_ASC

  """"""
  id_DESC

  """"""
  createdAt_ASC

  """"""
  createdAt_DESC

  """"""
  updatedAt_ASC

  """"""
  updatedAt_DESC

  """"""
  publishedAt_ASC

  """"""
  publishedAt_DESC

  """"""
  firstName_ASC

  """"""
  firstName_DESC

  """"""
  middleName_ASC

  """"""
  middleName_DESC

  """"""
  lastName_ASC

  """"""
  lastName_DESC

  """"""
  emailAddress_ASC

  """"""
  emailAddress_DESC

  """"""
  password_ASC

  """"""
  password_DESC

  """"""
  birthdate_ASC

  """"""
  birthdate_DESC

  """"""
  gender_ASC

  """"""
  gender_DESC

  """"""
  country_ASC

  """"""
  country_DESC

  """"""
  city_ASC

  """"""
  city_DESC
}

""""""
input AccountUpdateInput {
  """"""
  firstName: String

  """"""
  middleName: String

  """"""
  lastName: String

  """"""
  emailAddress: String

  """"""
  password: String

  """"""
  birthdate: Date

  """"""
  avatar: AssetUpdateOneInlineInput

  """"""
  gender: Gender

  """"""
  country: String

  """"""
  city: String

  """"""
  comment: CommentUpdateOneInlineInput

  """"""
  post: PostUpdateOneInlineInput
}

"""References Post record uniquely"""
input PostWhereUniqueInput {
  """"""
  id: ID
}

"""
A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar.
"""
scalar Date

""""""
enum AccountType {
  """"""
  Admin

  """"""
  Member
}

""""""
input CommentUpdateWithNestedWhereUniqueInput {
  """Unique document search"""
  where: CommentWhereUniqueInput!

  """Document to update"""
  data: CommentUpdateInput!
}

""""""
enum _FilterKind {
  """"""
  search

  """"""
  AND

  """"""
  OR

  """"""
  NOT

  """"""
  eq

  """"""
  eq_not

  """"""
  in

  """"""
  not_in

  """"""
  lt

  """"""
  lte

  """"""
  gt

  """"""
  gte

  """"""
  contains

  """"""
  not_contains

  """"""
  starts_with

  """"""
  not_starts_with

  """"""
  ends_with

  """"""
  not_ends_with

  """"""
  contains_all

  """"""
  contains_some

  """"""
  contains_none

  """"""
  relational_single

  """"""
  relational_every

  """"""
  relational_some

  """"""
  relational_none
}

""""""
input AssetUpdateOneInlineInput {
  """Create and connect one Asset document"""
  create: AssetCreateInput

  """Update single Asset document"""
  update: AssetUpdateWithNestedWhereUniqueInput

  """Upsert single Asset document"""
  upsert: AssetUpsertWithNestedWhereUniqueInput

  """Connect existing Asset document"""
  connect: AssetWhereUniqueInput

  """Disconnect currently connected Asset document"""
  disconnect: Boolean

  """Delete currently connected Asset document"""
  delete: Boolean
}

""""""
input CommentUpsertWithNestedWhereUniqueInput {
  """Unique document search"""
  where: CommentWhereUniqueInput!

  """Upsert data"""
  data: CommentUpsertInput!
}

"""Identifies documents"""
input PostManyWhereInput {
  """Contains search across all appropriate fields."""
  _search: String

  """Logical AND on all given filters."""
  AND: [PostWhereInput!]

  """Logical OR on all given filters."""
  OR: [PostWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PostWhereInput!]

  """"""
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string"""
  id_not_ends_with: ID

  """"""
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime

  """"""
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime

  """"""
  publishedAt: DateTime

  """All values that are not equal to given value."""
  publishedAt_not: DateTime

  """All values that are contained in given list."""
  publishedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  publishedAt_not_in: [DateTime!]

  """All values less than the given value."""
  publishedAt_lt: DateTime

  """All values less than or equal the given value."""
  publishedAt_lte: DateTime

  """All values greater than the given value."""
  publishedAt_gt: DateTime

  """All values greater than or equal the given value."""
  publishedAt_gte: DateTime

  """"""
  images_every: AssetWhereInput

  """"""
  images_some: AssetWhereInput

  """"""
  images_none: AssetWhereInput

  """"""
  creator: AccountWhereInput
}

""""""
input PostCreateOneInlineInput {
  """Create and connect one Post document"""
  create: PostCreateInput

  """Connect one existing Post document"""
  connect: PostWhereUniqueInput
}

""""""
input AssetCreateLocalizationInput {
  """Localization input"""
  data: AssetCreateLocalizationDataInput!

  """"""
  locale: Locale!
}

""""""
enum SystemDateTimeFieldVariation {
  """"""
  BASE

  """"""
  LOCALIZATION

  """"""
  COMBINED
}

""""""
type Version {
  """"""
  id: ID!

  """"""
  stage: Stage!

  """"""
  revision: Int!

  """"""
  createdAt: DateTime!
}

""""""
input AssetCreateOneInlineInput {
  """Create and connect one Asset document"""
  create: AssetCreateInput

  """Connect one existing Asset document"""
  connect: AssetWhereUniqueInput
}

""""""
scalar Hex

""""""
enum _SystemDateTimeFieldVariation {
  """"""
  base

  """"""
  localization

  """"""
  combined
}

""""""
input AccountConnectInput {
  """Document to connect"""
  where: AccountWhereUniqueInput!

  """
  Allow to specify document position in list of connected documents, will default to appending at end of list
  """
  position: ConnectPositionInput
}

""""""
input AssetUpdateManyInput {
  """"""
  fileName: String

  """"""
  height: Float

  """"""
  width: Float

  """"""
  size: Float

  """"""
  mimeType: String

  """Optional updates to localizations"""
  localizations: AssetUpdateManyLocalizationsInput
}

""""""
input PostUpdateWithNestedWhereUniqueInput {
  """Unique document search"""
  where: PostWhereUniqueInput!

  """Document to update"""
  data: PostUpdateInput!
}

""""""
input UnpublishLocaleInput {
  """Locales to unpublish"""
  locale: Locale!

  """Stages to unpublish selected locales from"""
  stages: [Stage!]!
}

""""""
type Post implements Node {
  """System stage field"""
  stage: Stage!

  """Get the document in other stages"""
  documentInStages(
    """Potential stages that should be returned"""
    stages: [Stage!]! = [PUBLISHED, DRAFT]

    """Decides if the current stage should be included or not"""
    includeCurrent: Boolean! = false

    """
    Decides if the documents should match the parent documents locale or should use the fallback order defined in the tree
    """
    inheritLocale: Boolean! = false
  ): [Post!]!

  """The unique identifier"""
  id: ID!

  """The time the document was created"""
  createdAt: DateTime!

  """The time the document was updated"""
  updatedAt: DateTime!

  """The time the document was published. Null on documents in draft stage."""
  publishedAt: DateTime

  """"""
  content: RichText!

  """"""
  images(
    """"""
    where: AssetWhereInput

    """"""
    orderBy: AssetOrderByInput

    """"""
    skip: Int

    """"""
    after: String

    """"""
    before: String

    """"""
    first: Int

    """"""
    last: Int

    """
    Allows to optionally override locale filtering behaviour in the query's subtree.
    
    Note that \`images\` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
    For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
    
    This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
    """
    locales: [Locale!]
  ): [Asset!]!

  """"""
  creator(
    """
    Allows to optionally override locale filtering behaviour in the query's subtree.
    
    Note that \`creator\` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
    For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
    
    This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
    """
    locales: [Locale!]
  ): Account

  """List of Post versions"""
  history(
    """"""
    limit: Int! = 10

    """"""
    skip: Int! = 0

    """
    This is optional and can be used to fetch the document version history for a specific stage instead of the current one
    """
    stageOverride: Stage
  ): [Version!]!
}

""""""
input CommentCreateOneInlineInput {
  """Create and connect one Comment document"""
  create: CommentCreateInput

  """Connect one existing Comment document"""
  connect: CommentWhereUniqueInput
}

"""Transformations for Documents"""
input DocumentTransformationInput {
  """Changes the output for the file."""
  output: DocumentOutputInput
}

"""Identifies documents"""
input AccountManyWhereInput {
  """Contains search across all appropriate fields."""
  _search: String

  """Logical AND on all given filters."""
  AND: [AccountWhereInput!]

  """Logical OR on all given filters."""
  OR: [AccountWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AccountWhereInput!]

  """"""
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string"""
  id_not_ends_with: ID

  """"""
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime

  """"""
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime

  """"""
  publishedAt: DateTime

  """All values that are not equal to given value."""
  publishedAt_not: DateTime

  """All values that are contained in given list."""
  publishedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  publishedAt_not_in: [DateTime!]

  """All values less than the given value."""
  publishedAt_lt: DateTime

  """All values less than or equal the given value."""
  publishedAt_lte: DateTime

  """All values greater than the given value."""
  publishedAt_gt: DateTime

  """All values greater than or equal the given value."""
  publishedAt_gte: DateTime

  """"""
  firstName: String

  """All values that are not equal to given value."""
  firstName_not: String

  """All values that are contained in given list."""
  firstName_in: [String!]

  """All values that are not contained in given list."""
  firstName_not_in: [String!]

  """All values containing the given string."""
  firstName_contains: String

  """All values not containing the given string."""
  firstName_not_contains: String

  """All values starting with the given string."""
  firstName_starts_with: String

  """All values not starting with the given string."""
  firstName_not_starts_with: String

  """All values ending with the given string."""
  firstName_ends_with: String

  """All values not ending with the given string"""
  firstName_not_ends_with: String

  """"""
  middleName: String

  """All values that are not equal to given value."""
  middleName_not: String

  """All values that are contained in given list."""
  middleName_in: [String!]

  """All values that are not contained in given list."""
  middleName_not_in: [String!]

  """All values containing the given string."""
  middleName_contains: String

  """All values not containing the given string."""
  middleName_not_contains: String

  """All values starting with the given string."""
  middleName_starts_with: String

  """All values not starting with the given string."""
  middleName_not_starts_with: String

  """All values ending with the given string."""
  middleName_ends_with: String

  """All values not ending with the given string"""
  middleName_not_ends_with: String

  """"""
  lastName: String

  """All values that are not equal to given value."""
  lastName_not: String

  """All values that are contained in given list."""
  lastName_in: [String!]

  """All values that are not contained in given list."""
  lastName_not_in: [String!]

  """All values containing the given string."""
  lastName_contains: String

  """All values not containing the given string."""
  lastName_not_contains: String

  """All values starting with the given string."""
  lastName_starts_with: String

  """All values not starting with the given string."""
  lastName_not_starts_with: String

  """All values ending with the given string."""
  lastName_ends_with: String

  """All values not ending with the given string"""
  lastName_not_ends_with: String

  """"""
  emailAddress: String

  """All values that are not equal to given value."""
  emailAddress_not: String

  """All values that are contained in given list."""
  emailAddress_in: [String!]

  """All values that are not contained in given list."""
  emailAddress_not_in: [String!]

  """All values containing the given string."""
  emailAddress_contains: String

  """All values not containing the given string."""
  emailAddress_not_contains: String

  """All values starting with the given string."""
  emailAddress_starts_with: String

  """All values not starting with the given string."""
  emailAddress_not_starts_with: String

  """All values ending with the given string."""
  emailAddress_ends_with: String

  """All values not ending with the given string"""
  emailAddress_not_ends_with: String

  """"""
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string"""
  password_not_ends_with: String

  """"""
  birthdate: Date

  """All values that are not equal to given value."""
  birthdate_not: Date

  """All values that are contained in given list."""
  birthdate_in: [Date!]

  """All values that are not contained in given list."""
  birthdate_not_in: [Date!]

  """All values less than the given value."""
  birthdate_lt: Date

  """All values less than or equal the given value."""
  birthdate_lte: Date

  """All values greater than the given value."""
  birthdate_gt: Date

  """All values greater than or equal the given value."""
  birthdate_gte: Date

  """"""
  avatar: AssetWhereInput

  """"""
  gender: Gender

  """All values that are not equal to given value."""
  gender_not: Gender

  """All values that are contained in given list."""
  gender_in: [Gender!]

  """All values that are not contained in given list."""
  gender_not_in: [Gender!]

  """"""
  country: String

  """All values that are not equal to given value."""
  country_not: String

  """All values that are contained in given list."""
  country_in: [String!]

  """All values that are not contained in given list."""
  country_not_in: [String!]

  """All values containing the given string."""
  country_contains: String

  """All values not containing the given string."""
  country_not_contains: String

  """All values starting with the given string."""
  country_starts_with: String

  """All values not starting with the given string."""
  country_not_starts_with: String

  """All values ending with the given string."""
  country_ends_with: String

  """All values not ending with the given string"""
  country_not_ends_with: String

  """"""
  city: String

  """All values that are not equal to given value."""
  city_not: String

  """All values that are contained in given list."""
  city_in: [String!]

  """All values that are not contained in given list."""
  city_not_in: [String!]

  """All values containing the given string."""
  city_contains: String

  """All values not containing the given string."""
  city_not_contains: String

  """All values starting with the given string."""
  city_starts_with: String

  """All values not starting with the given string."""
  city_not_starts_with: String

  """All values ending with the given string."""
  city_ends_with: String

  """All values not ending with the given string"""
  city_not_ends_with: String

  """"""
  comment: CommentWhereInput

  """"""
  post: PostWhereInput
}

"""
Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values
"""
type RichText {
  """Returns AST representation"""
  raw: RichTextAST!

  """Returns HTMl representation"""
  html: String!

  """Returns Markdown representation"""
  markdown: String!

  """Returns plain-text contents of RichText"""
  text: String!
}

""""""
type Aggregate {
  """"""
  count: Int!
}

"""Locale system enumeration"""
enum Locale {
  """System locale"""
  en
}

""""""
enum Gender {
  """"""
  Female

  """"""
  Male
}

""""""
input AssetUpdateManyLocalizationDataInput {
  """"""
  fileName: String

  """"""
  height: Float

  """"""
  width: Float

  """"""
  size: Float

  """"""
  mimeType: String
}

""""""
input AssetUpdateManyWithNestedWhereInput {
  """Document search"""
  where: AssetWhereInput!

  """Update many input"""
  data: AssetUpdateManyInput!
}

""""""
input CommentUpdateManyInput {
  """"""
  content: String
}

""""""
input CommentCreateManyInlineInput {
  """Create and connect multiple existing Comment documents"""
  create: [CommentCreateInput!]

  """Connect multiple existing Comment documents"""
  connect: [CommentWhereUniqueInput!]
}

"""
Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba()
"""
type RGBA {
  """"""
  r: RGBAHue!

  """"""
  g: RGBAHue!

  """"""
  b: RGBAHue!

  """"""
  a: RGBATransparency!
}

""""""
enum _RelationInputKind {
  """"""
  create

  """"""
  update
}

""""""
input PostUpsertInput {
  """Create document if it didn't exist"""
  create: PostCreateInput!

  """Update document if it exists"""
  update: PostUpdateInput!
}

""""""
input AssetConnectInput {
  """Document to connect"""
  where: AssetWhereUniqueInput!

  """
  Allow to specify document position in list of connected documents, will default to appending at end of list
  """
  position: ConnectPositionInput
}

""""""
input AssetUpsertWithNestedWhereUniqueInput {
  """Unique document search"""
  where: AssetWhereUniqueInput!

  """Upsert data"""
  data: AssetUpsertInput!
}

""""""
input CommentUpdateManyInlineInput {
  """Create and connect multiple Comment documents"""
  create: [CommentCreateInput!]

  """Connect multiple existing Comment documents"""
  connect: [CommentConnectInput!]

  """
  Override currently-connected documents with multiple existing Comment documents
  """
  set: [CommentWhereUniqueInput!]

  """Update multiple Comment documents"""
  update: [CommentUpdateWithNestedWhereUniqueInput!]

  """Upsert multiple Comment documents"""
  upsert: [CommentUpsertWithNestedWhereUniqueInput!]

  """Disconnect multiple Comment documents"""
  disconnect: [CommentWhereUniqueInput!]

  """Delete multiple Comment documents"""
  delete: [CommentWhereUniqueInput!]
}

""""""
enum AssetOrderByInput {
  """"""
  id_ASC

  """"""
  id_DESC

  """"""
  createdAt_ASC

  """"""
  createdAt_DESC

  """"""
  updatedAt_ASC

  """"""
  updatedAt_DESC

  """"""
  publishedAt_ASC

  """"""
  publishedAt_DESC

  """"""
  handle_ASC

  """"""
  handle_DESC

  """"""
  fileName_ASC

  """"""
  fileName_DESC

  """"""
  height_ASC

  """"""
  height_DESC

  """"""
  width_ASC

  """"""
  width_DESC

  """"""
  size_ASC

  """"""
  size_DESC

  """"""
  mimeType_ASC

  """"""
  mimeType_DESC
}

""""""
input ImageResizeInput {
  """
  The width in pixels to resize the image to. The value must be an integer from 1 to 10000.
  """
  width: Int

  """
  The height in pixels to resize the image to. The value must be an integer from 1 to 10000.
  """
  height: Int

  """The default value for the fit parameter is fit:clip."""
  fit: ImageFit
}

""""""
input AccountUpdateManyInlineInput {
  """Create and connect multiple Account documents"""
  create: [AccountCreateInput!]

  """Connect multiple existing Account documents"""
  connect: [AccountConnectInput!]

  """
  Override currently-connected documents with multiple existing Account documents
  """
  set: [AccountWhereUniqueInput!]

  """Update multiple Account documents"""
  update: [AccountUpdateWithNestedWhereUniqueInput!]

  """Upsert multiple Account documents"""
  upsert: [AccountUpsertWithNestedWhereUniqueInput!]

  """Disconnect multiple Account documents"""
  disconnect: [AccountWhereUniqueInput!]

  """Delete multiple Account documents"""
  delete: [AccountWhereUniqueInput!]
}

"""
The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

""""""
type DocumentVersion {
  """"""
  id: ID!

  """"""
  stage: Stage!

  """"""
  revision: Int!

  """"""
  createdAt: DateTime!

  """"""
  data: Json
}

""""""
input AssetUpdateWithNestedWhereUniqueInput {
  """Unique document search"""
  where: AssetWhereUniqueInput!

  """Document to update"""
  data: AssetUpdateInput!
}

""""""
enum _OrderDirection {
  """"""
  asc

  """"""
  desc
}

"""Raw JSON value"""
scalar Json

"""A connection to a list of items."""
type AccountConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [AccountEdge!]!

  """"""
  aggregate: Aggregate!
}

"""An edge in a connection."""
type AccountEdge {
  """The item at the end of the edge."""
  node: Account!

  """A cursor for use in pagination."""
  cursor: String!
}

""""""
input CommentCreateInput {
  """"""
  createdAt: DateTime

  """"""
  updatedAt: DateTime

  """"""
  creator: AccountCreateOneInlineInput

  """"""
  content: String
}

""""""
input CommentUpdateInput {
  """"""
  creator: AccountUpdateOneInlineInput

  """"""
  content: String
}

"""An edge in a connection."""
type PostEdge {
  """The item at the end of the edge."""
  node: Post!

  """A cursor for use in pagination."""
  cursor: String!
}

"""Identifies documents"""
input PostWhereInput {
  """Contains search across all appropriate fields."""
  _search: String

  """Logical AND on all given filters."""
  AND: [PostWhereInput!]

  """Logical OR on all given filters."""
  OR: [PostWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PostWhereInput!]

  """"""
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string"""
  id_not_ends_with: ID

  """"""
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime

  """"""
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime

  """"""
  publishedAt: DateTime

  """All values that are not equal to given value."""
  publishedAt_not: DateTime

  """All values that are contained in given list."""
  publishedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  publishedAt_not_in: [DateTime!]

  """All values less than the given value."""
  publishedAt_lt: DateTime

  """All values less than or equal the given value."""
  publishedAt_lte: DateTime

  """All values greater than the given value."""
  publishedAt_gt: DateTime

  """All values greater than or equal the given value."""
  publishedAt_gte: DateTime

  """"""
  images_every: AssetWhereInput

  """"""
  images_some: AssetWhereInput

  """"""
  images_none: AssetWhereInput

  """"""
  creator: AccountWhereInput
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!

  """The Stage of an object"""
  stage: Stage!
}

""""""
input PublishLocaleInput {
  """Locales to publish"""
  locale: Locale!

  """Stages to publish selected locales to"""
  stages: [Stage!]!
}

"""Transformations for Assets"""
input AssetTransformationInput {
  """"""
  image: ImageTransformationInput

  """"""
  document: DocumentTransformationInput

  """Pass true if you want to validate the passed transformation parameters"""
  validateOptions: Boolean = false
}

""""""
enum ImageFit {
  """
  Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio.
  """
  clip

  """
  Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries.
  """
  crop

  """
  Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method.
  """
  scale

  """
  Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size.
  """
  max
}

""""""
input AccountUpsertWithNestedWhereUniqueInput {
  """Unique document search"""
  where: AccountWhereUniqueInput!

  """Upsert data"""
  data: AccountUpsertInput!
}

"""A connection to a list of items."""
type AssetConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [AssetEdge!]!

  """"""
  aggregate: Aggregate!
}

"""Identifies documents"""
input AssetWhereInput {
  """Contains search across all appropriate fields."""
  _search: String

  """Logical AND on all given filters."""
  AND: [AssetWhereInput!]

  """Logical OR on all given filters."""
  OR: [AssetWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AssetWhereInput!]

  """"""
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string"""
  id_not_ends_with: ID

  """"""
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime

  """"""
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime

  """"""
  publishedAt: DateTime

  """All values that are not equal to given value."""
  publishedAt_not: DateTime

  """All values that are contained in given list."""
  publishedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  publishedAt_not_in: [DateTime!]

  """All values less than the given value."""
  publishedAt_lt: DateTime

  """All values less than or equal the given value."""
  publishedAt_lte: DateTime

  """All values greater than the given value."""
  publishedAt_gt: DateTime

  """All values greater than or equal the given value."""
  publishedAt_gte: DateTime

  """"""
  handle: String

  """All values that are not equal to given value."""
  handle_not: String

  """All values that are contained in given list."""
  handle_in: [String!]

  """All values that are not contained in given list."""
  handle_not_in: [String!]

  """All values containing the given string."""
  handle_contains: String

  """All values not containing the given string."""
  handle_not_contains: String

  """All values starting with the given string."""
  handle_starts_with: String

  """All values not starting with the given string."""
  handle_not_starts_with: String

  """All values ending with the given string."""
  handle_ends_with: String

  """All values not ending with the given string"""
  handle_not_ends_with: String

  """"""
  fileName: String

  """All values that are not equal to given value."""
  fileName_not: String

  """All values that are contained in given list."""
  fileName_in: [String!]

  """All values that are not contained in given list."""
  fileName_not_in: [String!]

  """All values containing the given string."""
  fileName_contains: String

  """All values not containing the given string."""
  fileName_not_contains: String

  """All values starting with the given string."""
  fileName_starts_with: String

  """All values not starting with the given string."""
  fileName_not_starts_with: String

  """All values ending with the given string."""
  fileName_ends_with: String

  """All values not ending with the given string"""
  fileName_not_ends_with: String

  """"""
  height: Float

  """All values that are not equal to given value."""
  height_not: Float

  """All values that are contained in given list."""
  height_in: [Float!]

  """All values that are not contained in given list."""
  height_not_in: [Float!]

  """All values less than the given value."""
  height_lt: Float

  """All values less than or equal the given value."""
  height_lte: Float

  """All values greater than the given value."""
  height_gt: Float

  """All values greater than or equal the given value."""
  height_gte: Float

  """"""
  width: Float

  """All values that are not equal to given value."""
  width_not: Float

  """All values that are contained in given list."""
  width_in: [Float!]

  """All values that are not contained in given list."""
  width_not_in: [Float!]

  """All values less than the given value."""
  width_lt: Float

  """All values less than or equal the given value."""
  width_lte: Float

  """All values greater than the given value."""
  width_gt: Float

  """All values greater than or equal the given value."""
  width_gte: Float

  """"""
  size: Float

  """All values that are not equal to given value."""
  size_not: Float

  """All values that are contained in given list."""
  size_in: [Float!]

  """All values that are not contained in given list."""
  size_not_in: [Float!]

  """All values less than the given value."""
  size_lt: Float

  """All values less than or equal the given value."""
  size_lte: Float

  """All values greater than the given value."""
  size_gt: Float

  """All values greater than or equal the given value."""
  size_gte: Float

  """"""
  mimeType: String

  """All values that are not equal to given value."""
  mimeType_not: String

  """All values that are contained in given list."""
  mimeType_in: [String!]

  """All values that are not contained in given list."""
  mimeType_not_in: [String!]

  """All values containing the given string."""
  mimeType_contains: String

  """All values not containing the given string."""
  mimeType_not_contains: String

  """All values starting with the given string."""
  mimeType_starts_with: String

  """All values not starting with the given string."""
  mimeType_not_starts_with: String

  """All values ending with the given string."""
  mimeType_ends_with: String

  """All values not ending with the given string"""
  mimeType_not_ends_with: String

  """"""
  accountAvatar_every: AccountWhereInput

  """"""
  accountAvatar_some: AccountWhereInput

  """"""
  accountAvatar_none: AccountWhereInput

  """"""
  postImages_every: PostWhereInput

  """"""
  postImages_some: PostWhereInput

  """"""
  postImages_none: PostWhereInput
}

""""""
type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

""""""
type Comment implements Node {
  """System stage field"""
  stage: Stage!

  """Get the document in other stages"""
  documentInStages(
    """Potential stages that should be returned"""
    stages: [Stage!]! = [PUBLISHED, DRAFT]

    """Decides if the current stage should be included or not"""
    includeCurrent: Boolean! = false

    """
    Decides if the documents should match the parent documents locale or should use the fallback order defined in the tree
    """
    inheritLocale: Boolean! = false
  ): [Comment!]!

  """The unique identifier"""
  id: ID!

  """The time the document was created"""
  createdAt: DateTime!

  """The time the document was updated"""
  updatedAt: DateTime!

  """The time the document was published. Null on documents in draft stage."""
  publishedAt: DateTime

  """"""
  creator(
    """
    Allows to optionally override locale filtering behaviour in the query's subtree.
    
    Note that \`creator\` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
    For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
    
    This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
    """
    locales: [Locale!]
  ): Account

  """"""
  content: String

  """List of Comment versions"""
  history(
    """"""
    limit: Int! = 10

    """"""
    skip: Int! = 0

    """
    This is optional and can be used to fetch the document version history for a specific stage instead of the current one
    """
    stageOverride: Stage
  ): [Version!]!
}

""""""
input AssetUpsertLocalizationInput {
  """"""
  update: AssetUpdateLocalizationDataInput!

  """"""
  create: AssetCreateLocalizationDataInput!

  """"""
  locale: Locale!
}

""""""
input AssetUpdateLocalizationDataInput {
  """"""
  handle: String

  """"""
  fileName: String

  """"""
  height: Float

  """"""
  width: Float

  """"""
  size: Float

  """"""
  mimeType: String
}

"""References Account record uniquely"""
input AccountWhereUniqueInput {
  """"""
  id: ID

  """"""
  firstName: String

  """"""
  emailAddress: String
}

"""References Asset record uniquely"""
input AssetWhereUniqueInput {
  """"""
  id: ID
}

""""""
enum _MutationInputFieldKind {
  """"""
  scalar

  """"""
  richText

  """"""
  enum

  """"""
  relation

  """"""
  union

  """"""
  virtual
}

""""""
type Account implements Node {
  """System stage field"""
  stage: Stage!

  """Get the document in other stages"""
  documentInStages(
    """Potential stages that should be returned"""
    stages: [Stage!]! = [PUBLISHED, DRAFT]

    """Decides if the current stage should be included or not"""
    includeCurrent: Boolean! = false

    """
    Decides if the documents should match the parent documents locale or should use the fallback order defined in the tree
    """
    inheritLocale: Boolean! = false
  ): [Account!]!

  """The unique identifier"""
  id: ID!

  """The time the document was created"""
  createdAt: DateTime!

  """The time the document was updated"""
  updatedAt: DateTime!

  """The time the document was published. Null on documents in draft stage."""
  publishedAt: DateTime

  """"""
  firstName: String!

  """"""
  middleName: String

  """"""
  lastName: String!

  """"""
  emailAddress: String!

  """"""
  password: String!

  """"""
  birthdate: Date

  """"""
  avatar(
    """
    Allows to optionally override locale filtering behaviour in the query's subtree.
    
    Note that \`avatar\` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
    For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
    
    This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
    """
    locales: [Locale!]
  ): Asset

  """"""
  gender: Gender!

  """"""
  country: String

  """"""
  city: String

  """"""
  comment(
    """
    Allows to optionally override locale filtering behaviour in the query's subtree.
    
    Note that \`comment\` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
    For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
    
    This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
    """
    locales: [Locale!]
  ): Comment

  """"""
  post(
    """
    Allows to optionally override locale filtering behaviour in the query's subtree.
    
    Note that \`post\` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
    For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
    
    This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
    """
    locales: [Locale!]
  ): Post

  """List of Account versions"""
  history(
    """"""
    limit: Int! = 10

    """"""
    skip: Int! = 0

    """
    This is optional and can be used to fetch the document version history for a specific stage instead of the current one
    """
    stageOverride: Stage
  ): [Version!]!
}

""""""
enum PostOrderByInput {
  """"""
  id_ASC

  """"""
  id_DESC

  """"""
  createdAt_ASC

  """"""
  createdAt_DESC

  """"""
  updatedAt_ASC

  """"""
  updatedAt_DESC

  """"""
  publishedAt_ASC

  """"""
  publishedAt_DESC
}

""""""
input AssetUpsertInput {
  """Create document if it didn't exist"""
  create: AssetCreateInput!

  """Update document if it exists"""
  update: AssetUpdateInput!
}
`
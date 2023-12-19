import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Bytes: { input: any; output: any; }
  Int8: { input: any; output: any; }
};

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  blockInfo?: Maybe<BlockInfo>;
  blockInfos: Array<BlockInfo>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryBlockInfoArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBlockInfosArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BlockInfo_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BlockInfo_Filter>;
};

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  blockInfo?: Maybe<BlockInfo>;
  blockInfos: Array<BlockInfo>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionBlockInfoArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBlockInfosArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BlockInfo_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BlockInfo_Filter>;
};

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type BlockInfo = {
  __typename?: 'blockInfo';
  batchNum?: Maybe<Scalars['BigInt']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  gasBlocklog: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  l1GasPrice: Scalars['BigInt']['output'];
  l1PricingSurplus: Scalars['BigInt']['output'];
  l2GasPrice?: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['BigInt']['output'];
};

export type BlockInfo_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BlockInfo_Filter>>>;
  batchNum?: InputMaybe<Scalars['BigInt']['input']>;
  batchNum_gt?: InputMaybe<Scalars['BigInt']['input']>;
  batchNum_gte?: InputMaybe<Scalars['BigInt']['input']>;
  batchNum_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  batchNum_lt?: InputMaybe<Scalars['BigInt']['input']>;
  batchNum_lte?: InputMaybe<Scalars['BigInt']['input']>;
  batchNum_not?: InputMaybe<Scalars['BigInt']['input']>;
  batchNum_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasBlocklog?: InputMaybe<Scalars['BigInt']['input']>;
  gasBlocklog_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasBlocklog_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasBlocklog_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasBlocklog_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasBlocklog_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasBlocklog_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasBlocklog_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  l1GasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  l1GasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  l1GasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  l1GasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  l1GasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  l1GasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  l1GasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  l1GasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  l1PricingSurplus?: InputMaybe<Scalars['BigInt']['input']>;
  l1PricingSurplus_gt?: InputMaybe<Scalars['BigInt']['input']>;
  l1PricingSurplus_gte?: InputMaybe<Scalars['BigInt']['input']>;
  l1PricingSurplus_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  l1PricingSurplus_lt?: InputMaybe<Scalars['BigInt']['input']>;
  l1PricingSurplus_lte?: InputMaybe<Scalars['BigInt']['input']>;
  l1PricingSurplus_not?: InputMaybe<Scalars['BigInt']['input']>;
  l1PricingSurplus_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  l2GasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  l2GasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  l2GasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  l2GasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  l2GasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  l2GasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  l2GasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  l2GasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<BlockInfo_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum BlockInfo_OrderBy {
  BatchNum = 'batchNum',
  BlockNumber = 'blockNumber',
  GasBlocklog = 'gasBlocklog',
  Id = 'id',
  L1GasPrice = 'l1GasPrice',
  L1PricingSurplus = 'l1PricingSurplus',
  L2GasPrice = 'l2GasPrice',
  Timestamp = 'timestamp'
}

export type BlockInfosQueryVariables = Exact<{
  block?: InputMaybe<Scalars['BigInt']['input']>;
}>;


export type BlockInfosQuery = { __typename?: 'Query', blockInfos: Array<{ __typename?: 'blockInfo', blockNumber: any, timestamp: any, l1GasPrice: any, l2GasPrice?: any | null, l1PricingSurplus: any, gasBlocklog: any }> };


export const BlockInfosDocument = gql`
    query blockInfos($block: BigInt) {
  blockInfos(
    first: 1000
    orderBy: blockNumber
    orderDirection: asc
    where: {blockNumber_gt: $block}
  ) {
    blockNumber
    timestamp
    l1GasPrice
    l2GasPrice
    l1PricingSurplus
    gasBlocklog
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    blockInfos(variables?: BlockInfosQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<BlockInfosQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<BlockInfosQuery>(BlockInfosDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'blockInfos', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface PresaleInterface extends ethers.utils.Interface {
  functions: {
    "HARD_CAP()": FunctionFragment;
    "approvedTokens(address)": FunctionFragment;
    "beneficiary()": FunctionFragment;
    "contribute(address,uint256)": FunctionFragment;
    "contributed()": FunctionFragment;
    "contributions(address)": FunctionFragment;
    "isOpen()": FunctionFragment;
    "maxContribution()": FunctionFragment;
    "minContribution()": FunctionFragment;
    "oracle()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setApprovedTokens(address[],bool[])": FunctionFragment;
    "setBeneficiary(address)": FunctionFragment;
    "setMaxContribution(uint256)": FunctionFragment;
    "setOracle(address)": FunctionFragment;
    "setSaleOpen(bool)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "HARD_CAP", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "approvedTokens",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "beneficiary",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "contribute",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "contributed",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "contributions",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "isOpen", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "maxContribution",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "minContribution",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "oracle", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovedTokens",
    values: [string[], boolean[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setBeneficiary",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setMaxContribution",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setOracle", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setSaleOpen",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "HARD_CAP", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "approvedTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "beneficiary",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "contribute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "contributed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "contributions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isOpen", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "maxContribution",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minContribution",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "oracle", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApprovedTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBeneficiary",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMaxContribution",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setOracle", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setSaleOpen",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "Contribution(address,address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "TokenState(address,bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Contribution"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenState"): EventFragment;
}

export type ContributionEvent = TypedEvent<
  [string, string, BigNumber] & {
    buyer: string;
    token: string;
    amount: BigNumber;
  }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type TokenStateEvent = TypedEvent<
  [string, boolean] & { token: string; state: boolean }
>;

export class Presale extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: PresaleInterface;

  functions: {
    HARD_CAP(overrides?: CallOverrides): Promise<[BigNumber]>;

    approvedTokens(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    beneficiary(overrides?: CallOverrides): Promise<[string]>;

    contribute(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    contributed(overrides?: CallOverrides): Promise<[BigNumber]>;

    contributions(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    isOpen(overrides?: CallOverrides): Promise<[boolean]>;

    maxContribution(overrides?: CallOverrides): Promise<[BigNumber]>;

    minContribution(overrides?: CallOverrides): Promise<[BigNumber]>;

    oracle(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setApprovedTokens(
      tokens: string[],
      approved: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setBeneficiary(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMaxContribution(
      max: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setOracle(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setSaleOpen(
      newState: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  HARD_CAP(overrides?: CallOverrides): Promise<BigNumber>;

  approvedTokens(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  beneficiary(overrides?: CallOverrides): Promise<string>;

  contribute(
    token: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  contributed(overrides?: CallOverrides): Promise<BigNumber>;

  contributions(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  isOpen(overrides?: CallOverrides): Promise<boolean>;

  maxContribution(overrides?: CallOverrides): Promise<BigNumber>;

  minContribution(overrides?: CallOverrides): Promise<BigNumber>;

  oracle(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setApprovedTokens(
    tokens: string[],
    approved: boolean[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setBeneficiary(
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMaxContribution(
    max: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setOracle(
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setSaleOpen(
    newState: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    HARD_CAP(overrides?: CallOverrides): Promise<BigNumber>;

    approvedTokens(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    beneficiary(overrides?: CallOverrides): Promise<string>;

    contribute(
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    contributed(overrides?: CallOverrides): Promise<BigNumber>;

    contributions(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    isOpen(overrides?: CallOverrides): Promise<boolean>;

    maxContribution(overrides?: CallOverrides): Promise<BigNumber>;

    minContribution(overrides?: CallOverrides): Promise<BigNumber>;

    oracle(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setApprovedTokens(
      tokens: string[],
      approved: boolean[],
      overrides?: CallOverrides
    ): Promise<void>;

    setBeneficiary(account: string, overrides?: CallOverrides): Promise<void>;

    setMaxContribution(
      max: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setOracle(account: string, overrides?: CallOverrides): Promise<void>;

    setSaleOpen(newState: boolean, overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Contribution(address,address,uint256)"(
      buyer?: string | null,
      token?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { buyer: string; token: string; amount: BigNumber }
    >;

    Contribution(
      buyer?: string | null,
      token?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { buyer: string; token: string; amount: BigNumber }
    >;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "TokenState(address,bool)"(
      token?: string | null,
      state?: null
    ): TypedEventFilter<[string, boolean], { token: string; state: boolean }>;

    TokenState(
      token?: string | null,
      state?: null
    ): TypedEventFilter<[string, boolean], { token: string; state: boolean }>;
  };

  estimateGas: {
    HARD_CAP(overrides?: CallOverrides): Promise<BigNumber>;

    approvedTokens(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    beneficiary(overrides?: CallOverrides): Promise<BigNumber>;

    contribute(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    contributed(overrides?: CallOverrides): Promise<BigNumber>;

    contributions(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    isOpen(overrides?: CallOverrides): Promise<BigNumber>;

    maxContribution(overrides?: CallOverrides): Promise<BigNumber>;

    minContribution(overrides?: CallOverrides): Promise<BigNumber>;

    oracle(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setApprovedTokens(
      tokens: string[],
      approved: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setBeneficiary(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMaxContribution(
      max: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setOracle(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setSaleOpen(
      newState: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    HARD_CAP(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    approvedTokens(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    beneficiary(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    contribute(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    contributed(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    contributions(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isOpen(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maxContribution(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    minContribution(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    oracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setApprovedTokens(
      tokens: string[],
      approved: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setBeneficiary(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMaxContribution(
      max: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setOracle(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setSaleOpen(
      newState: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ClubCreateFormInputValues = {
    name?: string;
    description?: string;
    thumbnail?: string;
    type?: string;
    managerID?: string;
};
export declare type ClubCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    thumbnail?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    managerID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ClubCreateFormOverridesProps = {
    ClubCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    thumbnail?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    managerID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ClubCreateFormProps = React.PropsWithChildren<{
    overrides?: ClubCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ClubCreateFormInputValues) => ClubCreateFormInputValues;
    onSuccess?: (fields: ClubCreateFormInputValues) => void;
    onError?: (fields: ClubCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ClubCreateFormInputValues) => ClubCreateFormInputValues;
    onValidate?: ClubCreateFormValidationValues;
} & React.CSSProperties>;
export default function ClubCreateForm(props: ClubCreateFormProps): React.ReactElement;

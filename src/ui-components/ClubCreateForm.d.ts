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
    introdution?: string;
    type?: string;
    thumbnail?: string;
    email?: string;
};
export declare type ClubCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    introdution?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    thumbnail?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ClubCreateFormOverridesProps = {
    ClubCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    introdution?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    thumbnail?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
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

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Club } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ClubUpdateFormInputValues = {
    name?: string;
    description?: string;
    thumbnail?: string;
    type?: string;
    managerID?: string;
};
export declare type ClubUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    thumbnail?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    managerID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ClubUpdateFormOverridesProps = {
    ClubUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    thumbnail?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    managerID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ClubUpdateFormProps = React.PropsWithChildren<{
    overrides?: ClubUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    club?: Club;
    onSubmit?: (fields: ClubUpdateFormInputValues) => ClubUpdateFormInputValues;
    onSuccess?: (fields: ClubUpdateFormInputValues) => void;
    onError?: (fields: ClubUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ClubUpdateFormInputValues) => ClubUpdateFormInputValues;
    onValidate?: ClubUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ClubUpdateForm(props: ClubUpdateFormProps): React.ReactElement;

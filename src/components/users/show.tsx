"use client"

import { useShow } from "@refinedev/core";
import {
    Show,
    NumberField,
    TextFieldComponent as TextField,
    EmailField,
    BooleanField,
    DateField,
    TagField,
} from "@refinedev/mui";
import { Typography, Stack } from "@mui/material";

export const UsersShow = () => {
    const { query } = useShow();
    const { data, isLoading } = query;

    const record = data?.data;

    return (
        <Show isLoading={isLoading}>
            <Stack gap={1}>
                <Typography variant="body1" fontWeight="bold">
                    Id
                </Typography>
                <NumberField value={record?.id ?? ""} />
                <Typography variant="body1" fontWeight="bold">
                    First Name
                </Typography>
                <TextField value={record?.firstName} />
                <Typography variant="body1" fontWeight="bold">
                    Last Name
                </Typography>
                <TextField value={record?.lastName} />
                <Typography variant="body1" fontWeight="bold">
                    Email
                </Typography>
                <EmailField value={record?.email} />
                <Typography variant="body1" fontWeight="bold">
                    Status
                </Typography>
                <BooleanField value={record?.status} />
                <Typography variant="body1" fontWeight="bold">
                    Birthday
                </Typography>
                <DateField value={record?.birthday} />
                <Typography variant="body1" fontWeight="bold">
                    Skills
                </Typography>
                <Stack direction="row" spacing={1}>
                    {record?.skills?.map((item: any) => (
                        <TagField value={item} key={item} />
                    ))}
                </Stack>
                <Typography variant="body1" fontWeight="bold">
                    Avatar
                </Typography>
                <Stack direction="row" spacing={1}>
                    {record?.avatar?.map((item: any) => (
                        <img
                            style={{
                                maxWidth: 200,
                                width: "100%",
                                height: 200,
                            }}
                            src={item?.url}
                            key={item?.url}
                        />
                    ))}
                </Stack>
            </Stack>
        </Show>
    );
};

"use client";

import { Edit } from "@refinedev/mui";
import { Box, TextField, Checkbox, FormControlLabel, Button } from "@mui/material";
import { useForm } from "@refinedev/react-hook-form";
import { Controller, useFieldArray } from "react-hook-form"

export const UsersEdit = () => {
    const {
        saveButtonProps,
        refineCore: { query },
        register,
        control,
        formState: { errors },
        watch
    } = useForm();

    const usersData = query?.data?.data;

    const {
        fields: fieldsSkills,
        append: appendSkills,
        remove: removeSkills,
    } = useFieldArray({
        control,
        name: "skills",
    })
    const skills = watch("skills") as string[]

    return (
        <Edit saveButtonProps={saveButtonProps}>
            <Box
                component="form"
                sx={{ display: "flex", flexDirection: "column" }}
                autoComplete="off"
            >
                <TextField
                    {...register("id", {
                        required: "This field is required",
                        valueAsNumber: true,
                    })}
                    error={!!(errors as any)?.id}
                    helperText={(errors as any)?.id?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    type="number"
                    label="Id"
                    name="id"
                    disabled
                />

                {skills?.map((_, index) => {
                    return (
                        <Box
                            key={fieldsSkills[index]?.id}
                            sx={{
                                display: "inline-flex",
                                alignItems: "center",
                                marginRight: "15px",
                            }}
                        >
                            <Controller
                                control={control}
                                name={`skills.${index}`}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        error={!!errors?.skills}
                                        helperText={errors.skills && `${errors.skills.message}`}
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="skills"
                                        label={`Skill - ${index + 1}`}
                                    />
                                )}
                            />
                            <Button
                                onClick={() => {
                                    removeSkills(index)
                                }}
                                sx={{ color: "red", cursor: "pointer" }}
                            />
                        </Box>
                    );
                })}
            </Box>
        </Edit>
    );
};

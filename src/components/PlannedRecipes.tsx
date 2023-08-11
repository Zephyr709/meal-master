import { Card, CardContent, CardHeader, CardMedia, Rating, Stack, } from '@mui/material';
import * as React from 'react';
import StarIcon from '@mui/icons-material/Star';


export default function PlannedRecipes() {
    const rating = 4.1
    return (
        <Stack
        spacing={2}
        >
            <Card>
                <CardHeader
                title='Spahgetti'
                action={
                    <Rating
                    name='text-feedback'
                    value={rating}
                    readOnly
                    precision={0.5}
                    emptyIcon={<StarIcon style={{opacity: 0.55}}/>}
                    />
                }
                />
                <CardMedia
                    sx={{
                        float: 'right',
                        color: 'lightgray',
                        height: '100px',
                        width: '100px',
                    }}
                />
                <CardContent>
                    <ul>
                        <li>
                            500g Spahgetti Noodles
                        </li>
                        <li>
                            Marinara Sauce
                        </li>
                        <li>
                            1/2 Pound of ground beef
                        </li>
                        <li>
                            Parmesean Cheese
                        </li>
                        <li>
                            1 Knob of butter
                        </li>
                    </ul>
                </CardContent>
            </Card>
        </Stack>
    );
}


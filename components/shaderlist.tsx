'use client';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ImageListItem, { imageListItemClasses } from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Avatar from 'components/global/avatar';
import { getFullyQualifiedSupabaseBucketURL } from 'lib/util/urlutils';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import { Item, theme } from 'theme/theme';

function ShaderPicker(props) {
    return (
        <Item
            elevation={12}
            sx={{
                display: 'inline-block',
                width: '100%'
            }}
        >
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(3, 1fr)',
                        lg: 'repeat(4, 1fr)'
                        // xl: 'repeat(6, 1fr)'
                    },
                    gap: '30px',
                    padding: '2em',
                    // standard variant from here:
                    // https://github.com/mui-org/material-ui/blob/3e679ac9e368aeb170d564d206d59913ceca7062/packages/mui-material/src/ImageListItem/ImageListItem.js#L42-L43
                    [`& .${imageListItemClasses.root}`]: {
                        display: 'flex',
                        flexDirection: 'column'
                    }
                }}
            >
                {props.shaders.map(shader => (
                    <ImageListItem key={shader.id} style={{ aspectRatio: '1/0.75' }}>
                        <Link passHref href={`/view/${shader.id}`}>
                            <Image
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    pointerEvents: 'none'
                                }}
                                src={getFullyQualifiedSupabaseBucketURL(shader.thumb_url)}
                                alt={shader.name}
                                width={512}
                                height={288}
                                priority={true}
                            />
                        </Link>
                        <ImageListItemBar
                            title={
                                <span
                                    style={{
                                        marginLeft: '2px',
                                        color: theme.palette.dracula.foreground
                                    }}
                                >
                                    {shader.name}
                                </span>
                            }
                            position="below"
                            subtitle={
                                <span
                                    style={{
                                        marginLeft: '2px',
                                        color: theme.palette.dracula.foreground
                                    }}
                                >
                                    <span>by </span>
                                    <Link href={`/userid/${shader.profile.id}`}>
                                        <span
                                            style={{
                                                fontWeight: 'bold',
                                                textDecoration: 'underline'
                                            }}
                                        >
                                            {shader.profile.username ?? 'anonymous'}
                                        </span>
                                    </Link>
                                </span>
                            }
                            style={{ borderRadius: '4px', textAlign: 'left' }}
                            actionIcon={
                                <Link href={`/userid/${shader.profile.id}`}>
                                    <Box sx={{ margin: '10px' }}>
                                        <Avatar url={shader.profile.avatar_url} size={25} />
                                    </Box>
                                </Link>
                            }
                        />
                    </ImageListItem>
                ))}
            </Box>
        </Item>
    );
}

export default function ShaderList(props) {
    const urlPrefix = props.query ? `/search/${props.query}` : '/list';

    return (
        <Fragment>
            <Box
                sx={{
                    display: 'inline-block',
                    position: 'relative',
                    left: '50%',
                    transform: 'translate(-50%, 0)',
                    width: '100%'
                }}
            >
                <ShaderPicker page={props.page} shaders={props.shaders} />
                <Container sx={{ display: 'flex', justifyContent: 'center', py: 3 }}>
                    <Pagination
                        count={props.numPages}
                        page={props.page}
                        color="secondary"
                        renderItem={item => (
                            <PaginationItem
                                component={Link}
                                href={`${urlPrefix}/${item.page}`}
                                {...item}
                            />
                        )}
                    />
                </Container>
            </Box>
        </Fragment>
    );
}

import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from './utils/constant'

function VideoCard({ video: { id: { videoId }, snippet}}) {
  return (
    <Card sx={{ width: { md: '320px', sx: '100%' }, boxShadow: 'none', borderRadius: 'none' }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
      <CardMedia 
      image={snippet?.thumbnail?.high?.url}
      alt={snippet?.title}
      sx={{ width: 350, height: 180 }} />
      </Link>
      <CardContent sx={{ background: '#1e1e1e', height: '50px' }} >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0,60)}
        </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
        <Typography variant="subtitle2" fontWeight="bold" color="gray">
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircle sx={{ fontSize: 12, color: "gray", ml: '5px'}}/>
        </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard
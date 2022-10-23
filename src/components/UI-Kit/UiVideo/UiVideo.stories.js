import UiVideo from "./UiVideo";

import video from './video/video.mp4'

export default {
    title: 'UI-Kit/UiVideo',
    component: UiVideo
}

const Template = (args) => <UiVideo {...args}/>

const props = {
    src: video,
    classes: '',
    playbackRate: 1.0
}

export const Default = Template.bind({})

Default.args = {
    ...props
}
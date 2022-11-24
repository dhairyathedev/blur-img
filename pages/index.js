import React from 'react'
import BlurImage from '../components/BlurImage'
import { IconBrandGithub, IconSchool } from '@tabler/icons';

export default function Index() {
  return (
    <>
      <div className="grid items-center min-h-screen mx-auto place-content-center">
          <div className="flex flex-col space-y-4">
            <div className="w-80">
            <BlurImage image={"https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"} />
            </div>
            <div className="flex justify-between">
              <div className="font-light text-[#878787] hover:text-black transition-all flex flex-row space-x-1">
                <IconBrandGithub />
                <a href="https://github.com/dhairyathedev/blur-img" target="_blank" rel="noreferrer noopener">GitHub</a>
              </div>
              <div className="font-light text-[#878787] hover:text-black transition-all flex flex-row space-x-1">
                <IconSchool />
                <a href="https://www.dhairyashah.dev/posts/how-to-blur-image-on-load-in-nextjs" target="_blank" rel="noreferrer noopener">How to?</a>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

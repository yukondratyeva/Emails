import React from 'react'
import { resolveElementWithProps, useProps } from '@figmint/react'

interface SupercellWrapperLatinProps {
  elementProps?: {
    [elementId: string]: Record<string, any> & {
      className?: string
      style?: React.CSSProperties
      as?: React.ElementType
    }
  }
}

const SupercellWrapperLatin = (incomingProps: SupercellWrapperLatinProps) => {
  const { props } = useProps({} as SupercellWrapperLatinProps, incomingProps)

  const render = (
    defaultTag: string,
    elementAttrs: Record<string, any>,
    ...children: any[]
  ) => resolveElementWithProps(null, props, defaultTag, elementAttrs, children)
  return (
    <>
      <></>
      {render(
        'div',
        {
          'data-figma-id': '4250:49379',
          className:
            'flex min-h-[72px] py-[4px] px-[16px] flex-col justify-center items-start gap-[10px] rounded-[24px] w-[100%] h-[100%] absolute top-[0px] left-[0px]',
          style: { background: '--tui-background-general' },
        },
        render(
          'div',
          {
            'data-figma-id': '4250:53060',
            className:
              'flex min-h-[40px] items-center gap-[16px] self-stretch h-[auto] relative',
          },
          props['Lead'] &&
            render(
              'div',
              {
                'data-figma-id': 'I4250:53060;4250:52915',
                className:
                  'flex justify-center items-center w-[40px] h-[auto] relative',
              },
              render(
                'div',
                {
                  'data-figma-id': 'I4250:53060;4250:52916',
                  className:
                    'flex justify-center items-center flex-shrink-0 w-[64px] h-[64px] relative',
                },
                render(
                  'div',
                  {
                    'data-figma-id': 'I4250:53060;4250:52916;37634:15751',
                    className:
                      'flex justify-center items-center flex-shrink-0 rounded-[128px] w-[40px] h-[40px] relative',
                    style: { background: 'webGeneralBg' },
                  },
                  props['Icon'] ||
                    render(
                      'div',
                      {
                        'data-figma-id': 'I4250:53060;4250:52916;37634:15752',
                        className: 'w-[24px] h-[24px] relative',
                      },
                      render(
                        'div',
                        {
                          'data-figma-id':
                            'I4250:53060;4250:52916;37634:15752;1:85',
                          className:
                            'absolute top-[2px] left-[2.489501953125px]',
                        },
                        <svg
                          width='20'
                          height='19'
                          viewBox='0 0 20 19'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M9.51056 0L11.7559 6.90956L19.0211 6.90983L13.1436 11.1804L15.3884 18.0902L9.51056 13.82L3.63271 18.0902L5.87753 11.1804L0 6.90983L7.26523 6.90956L9.51056 0Z'
                            fill='#1A1919'
                          />
                        </svg>
                      )
                    )
                )
              )
            ),
          render(
            'div',
            {
              'data-figma-id': 'I4250:53060;4250:52944',
              className:
                'flex items-center gap-[16px] flex-1 h-[auto] relative',
            },
            render(
              'div',
              {
                'data-figma-id': 'I4250:53060;4250:52944;4250:49611',
                className:
                  'flex flex-col justify-center items-start flex-1 h-[auto] relative',
              },
              render(
                'div',
                {
                  'data-figma-id': 'I4250:53060;4250:52944;4250:52676',
                  className: 'flex items-center self-stretch h-[auto] relative',
                },
                render(
                  'div',
                  {
                    'data-figma-id': 'I4250:53060;4250:52944;4250:56233',
                    className: 'flex items-center flex-1 h-[auto] relative',
                  },
                  render(
                    'p',
                    {
                      'data-figma-id':
                        'I4250:53060;4250:52944;4250:56233;4250:53639',
                      className:
                        'flex-1 text-[16px] not-italic font-normal leading-[150%] tracking-[0.2px] h-[auto] relative m-[0]',
                      style: {
                        color: '--tui-front-primary',
                        'font-family': 'Tahoma',
                        'white-space': 'normal',
                        'word-wrap': 'break-word',
                      },
                    },
                    props['Value']
                  )
                )
              ),
              props['Subtitle'] &&
                render(
                  'div',
                  {
                    'data-figma-id': 'I4250:53060;4250:52944;4250:52678',
                    className:
                      'flex items-center self-stretch h-[auto] relative',
                  },
                  render(
                    'div',
                    {
                      'data-figma-id': 'I4250:53060;4250:52944;4250:56268',
                      className: 'flex items-center flex-1 h-[auto] relative',
                    },
                    render(
                      'p',
                      {
                        'data-figma-id':
                          'I4250:53060;4250:52944;4250:56268;4250:53650',
                        className:
                          'flex-1 text-[14px] not-italic font-normal leading-[150%] tracking-[0.2px] h-[auto] relative m-[0]',
                        style: {
                          color: '--tui-front-secondary',
                          'font-family': 'Tahoma',
                          'white-space': 'normal',
                          'word-wrap': 'break-word',
                        },
                      },
                      props['Value']
                    )
                  )
                )
            )
          )
        )
      )}
    </>
  )
}

export default SupercellWrapperLatin

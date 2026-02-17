import React from 'react'
import {
  useVariantState,
  resolveElementWithProps,
  useProps,
} from '@figmint/react'

interface EmailTextBlockLatinProps {
  'Show Header'?: boolean
  'Show Subhead'?: boolean
  'Show Extra block'?: boolean
  Instance?: React.ReactNode
  Wrapper?: 'False' | 'True'
  elementProps?: {
    [elementId: string]: Record<string, any> & {
      className?: string
      style?: React.CSSProperties
      as?: React.ElementType
    }
  }
}

const variantEmailTextBlockLatinFalse = (
  incomingProps: EmailTextBlockLatinProps & {
    eventHandlers?: Record<string, any>
  }
) => {
  const { props } = useProps(
    {
      'Show Header': true,
      'Show Subhead': true,
      'Show Extra block': true,
      Instance: null,
      Wrapper: 'False',
    } as EmailTextBlockLatinProps,
    incomingProps
  )
  const render = (
    defaultTag: string,
    elementAttrs: Record<string, any>,
    ...children: any[]
  ) =>
    resolveElementWithProps(
      '4209:9173',
      props,
      defaultTag,
      elementAttrs,
      children
    )
  return render(
    'div',
    {
      'data-figma-id': '4209:9173',
      className:
        'flex pb-[24px] flex-col items-start gap-[24px] h-[100%] absolute top-[0px] left-[0px] w-[100%]',
    },
    render(
      'div',
      {
        'data-figma-id': '4209:9174',
        className:
          'flex flex-col items-start gap-[8px] self-stretch h-[auto] relative',
      },
      props['Show Header'] &&
        render(
          'p',
          {
            'data-figma-id': '4209:9175',
            className:
              'self-stretch text-[18px] not-italic font-bold leading-[120%] tracking-[0.2px] h-[auto] relative m-[0]',
            style: {
              color: '--tui-front-primary',
              'font-family': 'Tahoma',
              'white-space': 'normal',
              'word-wrap': 'break-word',
            },
          },
          'Extend your plan'
        ),
      props['Show Subhead'] &&
        render(
          'p',
          {
            'data-figma-id': '4209:9176',
            className:
              'self-stretch text-[16px] not-italic font-normal leading-[150%] tracking-[0.2px] h-[auto] relative m-[0]',
            style: {
              color: '--tui-front-primary',
              'font-family': 'Tahoma',
              'white-space': 'normal',
              'word-wrap': 'break-word',
            },
          },
          'Need more flexibility? Reduce your monthly payments by extending your plan up to 12 months.'
        ),
      props['Show Extra block'] &&
        (props['Instance'] ||
          render(
            'div',
            {
              'data-figma-id': '4551:14291',
              className:
                'flex flex-col items-start self-stretch h-[auto] relative',
            },
            render(
              'div',
              {
                'data-figma-id': 'I4551:14291;4172:13771',
                className:
                  'flex items-center gap-[16px] self-stretch h-[40px] relative',
              },
              render(
                'div',
                {
                  'data-figma-id': 'I4551:14291;4172:13771;4250:57284',
                  className:
                    'flex items-center gap-[16px] flex-1 h-[auto] relative',
                },
                render(
                  'div',
                  {
                    'data-figma-id':
                      'I4551:14291;4172:13771;4250:57284;4250:52944',
                    className:
                      'flex flex-col justify-center items-start flex-1 h-[auto] relative',
                  },
                  render(
                    'div',
                    {
                      'data-figma-id':
                        'I4551:14291;4172:13771;4250:57284;4250:52944;4250:49625',
                      className:
                        'flex items-start gap-[16px] self-stretch h-[auto] relative',
                    },
                    render(
                      'div',
                      {
                        'data-figma-id':
                          'I4551:14291;4172:13771;4250:57284;4250:52944;4250:56247',
                        className:
                          'flex items-center flex-1 self-stretch relative',
                      },
                      render(
                        'p',
                        {
                          'data-figma-id':
                            'I4551:14291;4172:13771;4250:57284;4250:52944;4250:56247;4250:53639',
                          className:
                            'text-[14px] not-italic font-normal leading-[150%] tracking-[0.2px] w-[auto] h-[auto] relative whitespace-nowrap m-[0]',
                          style: {
                            color: '--tui-front-secondary',
                            'font-family': 'Tahoma',
                          },
                        },
                        props['Value']
                      )
                    ),
                    render(
                      'div',
                      {
                        'data-figma-id':
                          'I4551:14291;4172:13771;4250:57284;4250:52944;4250:56265',
                        className:
                          'flex items-center w-[auto] h-[auto] relative',
                      },
                      render(
                        'p',
                        {
                          'data-figma-id':
                            'I4551:14291;4172:13771;4250:57284;4250:52944;4250:56265;4250:53639',
                          className:
                            'text-right text-[16px] not-italic font-normal leading-[150%] tracking-[0.2px] w-[auto] h-[auto] relative whitespace-nowrap m-[0]',
                          style: {
                            color: '--tui-front-primary',
                            'font-family': 'Tahoma',
                          },
                        },
                        props['Value']
                      )
                    )
                  )
                )
              )
            ),
            render(
              'div',
              {
                'data-figma-id': 'I4551:14291;4172:13774',
                className:
                  'flex items-center gap-[16px] self-stretch h-[40px] relative',
              },
              render(
                'div',
                {
                  'data-figma-id': 'I4551:14291;4172:13774;4250:57284',
                  className:
                    'flex items-center gap-[16px] flex-1 h-[auto] relative',
                },
                render(
                  'div',
                  {
                    'data-figma-id':
                      'I4551:14291;4172:13774;4250:57284;4250:52944',
                    className:
                      'flex flex-col justify-center items-start flex-1 h-[auto] relative',
                  },
                  render(
                    'div',
                    {
                      'data-figma-id':
                        'I4551:14291;4172:13774;4250:57284;4250:52944;4250:49625',
                      className:
                        'flex items-start gap-[16px] self-stretch h-[auto] relative',
                    },
                    render(
                      'div',
                      {
                        'data-figma-id':
                          'I4551:14291;4172:13774;4250:57284;4250:52944;4250:56247',
                        className:
                          'flex items-center flex-1 self-stretch relative',
                      },
                      render(
                        'p',
                        {
                          'data-figma-id':
                            'I4551:14291;4172:13774;4250:57284;4250:52944;4250:56247;4250:53639',
                          className:
                            'text-[14px] not-italic font-normal leading-[150%] tracking-[0.2px] w-[auto] h-[auto] relative whitespace-nowrap m-[0]',
                          style: {
                            color: '--tui-front-secondary',
                            'font-family': 'Tahoma',
                          },
                        },
                        props['Value']
                      )
                    ),
                    render(
                      'div',
                      {
                        'data-figma-id':
                          'I4551:14291;4172:13774;4250:57284;4250:52944;4250:56265',
                        className:
                          'flex items-center w-[auto] h-[auto] relative',
                      },
                      render(
                        'p',
                        {
                          'data-figma-id':
                            'I4551:14291;4172:13774;4250:57284;4250:52944;4250:56265;4250:53639',
                          className:
                            'text-right text-[16px] not-italic font-normal leading-[150%] tracking-[0.2px] w-[auto] h-[auto] relative whitespace-nowrap m-[0]',
                          style: {
                            color: '--tui-front-primary',
                            'font-family': 'Tahoma',
                          },
                        },
                        props['Value']
                      )
                    )
                  )
                )
              )
            ),
            render(
              'div',
              {
                'data-figma-id': 'I4551:14291;4172:13777',
                className:
                  'flex items-center gap-[16px] self-stretch h-[40px] relative',
              },
              render(
                'div',
                {
                  'data-figma-id': 'I4551:14291;4172:13777;4250:57284',
                  className:
                    'flex items-center gap-[16px] flex-1 h-[auto] relative',
                },
                render(
                  'div',
                  {
                    'data-figma-id':
                      'I4551:14291;4172:13777;4250:57284;4250:52944',
                    className:
                      'flex flex-col justify-center items-start flex-1 h-[auto] relative',
                  },
                  render(
                    'div',
                    {
                      'data-figma-id':
                        'I4551:14291;4172:13777;4250:57284;4250:52944;4250:49625',
                      className:
                        'flex items-start gap-[16px] self-stretch h-[auto] relative',
                    },
                    render(
                      'div',
                      {
                        'data-figma-id':
                          'I4551:14291;4172:13777;4250:57284;4250:52944;4250:56247',
                        className:
                          'flex items-center flex-1 self-stretch relative',
                      },
                      render(
                        'p',
                        {
                          'data-figma-id':
                            'I4551:14291;4172:13777;4250:57284;4250:52944;4250:56247;4250:53639',
                          className:
                            'text-[14px] not-italic font-normal leading-[150%] tracking-[0.2px] w-[auto] h-[auto] relative whitespace-nowrap m-[0]',
                          style: {
                            color: '--tui-front-secondary',
                            'font-family': 'Tahoma',
                          },
                        },
                        props['Value']
                      )
                    ),
                    render(
                      'div',
                      {
                        'data-figma-id':
                          'I4551:14291;4172:13777;4250:57284;4250:52944;4250:56265',
                        className:
                          'flex items-center w-[auto] h-[auto] relative',
                      },
                      render(
                        'p',
                        {
                          'data-figma-id':
                            'I4551:14291;4172:13777;4250:57284;4250:52944;4250:56265;4250:53639',
                          className:
                            'text-right text-[16px] not-italic font-normal leading-[150%] tracking-[0.2px] w-[auto] h-[auto] relative whitespace-nowrap m-[0]',
                          style: {
                            color: '--tui-front-primary',
                            'font-family': 'Tahoma',
                          },
                        },
                        props['Value']
                      )
                    )
                  )
                )
              )
            ),
            render(
              'div',
              {
                'data-figma-id': 'I4551:14291;4250:60602',
                className:
                  'flex items-center gap-[16px] self-stretch h-[40px] relative',
              },
              render(
                'div',
                {
                  'data-figma-id': 'I4551:14291;4250:60602;4250:57284',
                  className:
                    'flex items-center gap-[16px] flex-1 h-[auto] relative',
                },
                render(
                  'div',
                  {
                    'data-figma-id':
                      'I4551:14291;4250:60602;4250:57284;4250:52944',
                    className:
                      'flex flex-col justify-center items-start flex-1 h-[auto] relative',
                  },
                  render(
                    'div',
                    {
                      'data-figma-id':
                        'I4551:14291;4250:60602;4250:57284;4250:52944;4250:49625',
                      className:
                        'flex items-start gap-[16px] self-stretch h-[auto] relative',
                    },
                    render(
                      'div',
                      {
                        'data-figma-id':
                          'I4551:14291;4250:60602;4250:57284;4250:52944;4250:56247',
                        className:
                          'flex items-center flex-1 self-stretch relative',
                      },
                      render(
                        'p',
                        {
                          'data-figma-id':
                            'I4551:14291;4250:60602;4250:57284;4250:52944;4250:56247;4250:53639',
                          className:
                            'text-[14px] not-italic font-normal leading-[150%] tracking-[0.2px] w-[auto] h-[auto] relative whitespace-nowrap m-[0]',
                          style: {
                            color: '--tui-front-secondary',
                            'font-family': 'Tahoma',
                          },
                        },
                        props['Value']
                      )
                    ),
                    render(
                      'div',
                      {
                        'data-figma-id':
                          'I4551:14291;4250:60602;4250:57284;4250:52944;4250:56265',
                        className:
                          'flex items-center w-[auto] h-[auto] relative',
                      },
                      render(
                        'p',
                        {
                          'data-figma-id':
                            'I4551:14291;4250:60602;4250:57284;4250:52944;4250:56265;4250:53639',
                          className:
                            'text-right text-[16px] not-italic font-normal leading-[150%] tracking-[0.2px] w-[auto] h-[auto] relative whitespace-nowrap m-[0]',
                          style: {
                            color: '--tui-front-primary',
                            'font-family': 'Tahoma',
                          },
                        },
                        props['Value']
                      )
                    )
                  )
                )
              )
            ),
            render(
              'div',
              {
                'data-figma-id': 'I4551:14291;4250:61047',
                className:
                  'flex items-center gap-[16px] self-stretch h-[40px] relative',
              },
              render(
                'div',
                {
                  'data-figma-id': 'I4551:14291;4250:61047;4250:57284',
                  className:
                    'flex items-center gap-[16px] flex-1 h-[auto] relative',
                },
                render(
                  'div',
                  {
                    'data-figma-id':
                      'I4551:14291;4250:61047;4250:57284;4250:52944',
                    className:
                      'flex flex-col justify-center items-start flex-1 h-[auto] relative',
                  },
                  render(
                    'div',
                    {
                      'data-figma-id':
                        'I4551:14291;4250:61047;4250:57284;4250:52944;4250:49625',
                      className:
                        'flex items-start gap-[16px] self-stretch h-[auto] relative',
                    },
                    render(
                      'div',
                      {
                        'data-figma-id':
                          'I4551:14291;4250:61047;4250:57284;4250:52944;4250:56247',
                        className:
                          'flex items-center flex-1 self-stretch relative',
                      },
                      render(
                        'p',
                        {
                          'data-figma-id':
                            'I4551:14291;4250:61047;4250:57284;4250:52944;4250:56247;4250:53639',
                          className:
                            'text-[14px] not-italic font-normal leading-[150%] tracking-[0.2px] w-[auto] h-[auto] relative whitespace-nowrap m-[0]',
                          style: {
                            color: '--tui-front-secondary',
                            'font-family': 'Tahoma',
                          },
                        },
                        props['Value']
                      )
                    ),
                    render(
                      'div',
                      {
                        'data-figma-id':
                          'I4551:14291;4250:61047;4250:57284;4250:52944;4250:56265',
                        className:
                          'flex items-center w-[auto] h-[auto] relative',
                      },
                      render(
                        'p',
                        {
                          'data-figma-id':
                            'I4551:14291;4250:61047;4250:57284;4250:52944;4250:56265;4250:53639',
                          className:
                            'text-right text-[16px] not-italic font-normal leading-[150%] tracking-[0.2px] w-[auto] h-[auto] relative whitespace-nowrap m-[0]',
                          style: {
                            color: '--tui-front-primary',
                            'font-family': 'Tahoma',
                          },
                        },
                        props['Value']
                      )
                    )
                  )
                )
              )
            ),
            render(
              'div',
              {
                'data-figma-id': 'I4551:14291;4250:61552',
                className:
                  'flex items-center gap-[16px] self-stretch h-[40px] relative',
              },
              render(
                'div',
                {
                  'data-figma-id': 'I4551:14291;4250:61552;4250:57284',
                  className:
                    'flex items-center gap-[16px] flex-1 h-[auto] relative',
                },
                render(
                  'div',
                  {
                    'data-figma-id':
                      'I4551:14291;4250:61552;4250:57284;4250:52944',
                    className:
                      'flex flex-col justify-center items-start flex-1 h-[auto] relative',
                  },
                  render(
                    'div',
                    {
                      'data-figma-id':
                        'I4551:14291;4250:61552;4250:57284;4250:52944;4250:49625',
                      className:
                        'flex items-start gap-[16px] self-stretch h-[auto] relative',
                    },
                    render(
                      'div',
                      {
                        'data-figma-id':
                          'I4551:14291;4250:61552;4250:57284;4250:52944;4250:56247',
                        className:
                          'flex items-center flex-1 self-stretch relative',
                      },
                      render(
                        'p',
                        {
                          'data-figma-id':
                            'I4551:14291;4250:61552;4250:57284;4250:52944;4250:56247;4250:53639',
                          className:
                            'text-[14px] not-italic font-normal leading-[150%] tracking-[0.2px] w-[auto] h-[auto] relative whitespace-nowrap m-[0]',
                          style: {
                            color: '--tui-front-secondary',
                            'font-family': 'Tahoma',
                          },
                        },
                        props['Value']
                      )
                    ),
                    render(
                      'div',
                      {
                        'data-figma-id':
                          'I4551:14291;4250:61552;4250:57284;4250:52944;4250:56265',
                        className:
                          'flex items-center w-[auto] h-[auto] relative',
                      },
                      render(
                        'p',
                        {
                          'data-figma-id':
                            'I4551:14291;4250:61552;4250:57284;4250:52944;4250:56265;4250:53639',
                          className:
                            'text-right text-[16px] not-italic font-normal leading-[150%] tracking-[0.2px] w-[auto] h-[auto] relative whitespace-nowrap m-[0]',
                          style: {
                            color: '--tui-front-primary',
                            'font-family': 'Tahoma',
                          },
                        },
                        props['Value']
                      )
                    )
                  )
                )
              )
            ),
            render(
              'div',
              {
                'data-figma-id': 'I4551:14291;4250:62252',
                className:
                  'flex items-center gap-[16px] self-stretch h-[40px] relative',
              },
              render(
                'div',
                {
                  'data-figma-id': 'I4551:14291;4250:62252;4250:57284',
                  className:
                    'flex items-center gap-[16px] flex-1 h-[auto] relative',
                },
                render(
                  'div',
                  {
                    'data-figma-id':
                      'I4551:14291;4250:62252;4250:57284;4250:52944',
                    className:
                      'flex flex-col justify-center items-start flex-1 h-[auto] relative',
                  },
                  render(
                    'div',
                    {
                      'data-figma-id':
                        'I4551:14291;4250:62252;4250:57284;4250:52944;4250:49625',
                      className:
                        'flex items-start gap-[16px] self-stretch h-[auto] relative',
                    },
                    render(
                      'div',
                      {
                        'data-figma-id':
                          'I4551:14291;4250:62252;4250:57284;4250:52944;4250:56247',
                        className:
                          'flex items-center flex-1 self-stretch relative',
                      },
                      render(
                        'p',
                        {
                          'data-figma-id':
                            'I4551:14291;4250:62252;4250:57284;4250:52944;4250:56247;4250:53639',
                          className:
                            'text-[14px] not-italic font-normal leading-[150%] tracking-[0.2px] w-[auto] h-[auto] relative whitespace-nowrap m-[0]',
                          style: {
                            color: '--tui-front-secondary',
                            'font-family': 'Tahoma',
                          },
                        },
                        props['Value']
                      )
                    ),
                    render(
                      'div',
                      {
                        'data-figma-id':
                          'I4551:14291;4250:62252;4250:57284;4250:52944;4250:56265',
                        className:
                          'flex items-center w-[auto] h-[auto] relative',
                      },
                      render(
                        'p',
                        {
                          'data-figma-id':
                            'I4551:14291;4250:62252;4250:57284;4250:52944;4250:56265;4250:53639',
                          className:
                            'text-right text-[16px] not-italic font-normal leading-[150%] tracking-[0.2px] w-[auto] h-[auto] relative whitespace-nowrap m-[0]',
                          style: {
                            color: '--tui-front-primary',
                            'font-family': 'Tahoma',
                          },
                        },
                        props['Value']
                      )
                    )
                  )
                )
              )
            )
          ))
    )
  )
}

const variantEmailTextBlockLatinTrue = (
  incomingProps: EmailTextBlockLatinProps & {
    eventHandlers?: Record<string, any>
  }
) => {
  const { props } = useProps(
    {
      'Show Header': true,
      'Show Subhead': true,
      'Show Extra block': true,
      Instance: null,
      Wrapper: 'False',
    } as EmailTextBlockLatinProps,
    incomingProps
  )
  const render = (
    defaultTag: string,
    elementAttrs: Record<string, any>,
    ...children: any[]
  ) =>
    resolveElementWithProps(
      '4209:14144',
      props,
      defaultTag,
      elementAttrs,
      children
    )
  return render(
    'div',
    {
      'data-figma-id': '4209:14144',
      className:
        'flex pb-[28px] flex-col items-center gap-[8px] rounded-[var(--Rounded-corners-Boxes-L, 20px)] w-[100%] h-[100%] absolute top-[0px] left-[0px]',
    },
    render(
      'div',
      {
        'data-figma-id': '4213:15997',
        className:
          'flex flex-col items-center gap-[8px] self-stretch rounded-[var(--Rounded-corners-Boxes-L, 20px)] h-[auto] relative',
        style: {
          padding: '24px var(--Layout-Spacing-M, 24px)',
          background: '--tui-background-general',
        },
      },
      render(
        'div',
        {
          'data-figma-id': '4551:24293',
          className:
            'flex flex-col items-start gap-[24px] self-stretch h-[auto] relative',
        },
        render(
          'div',
          {
            'data-figma-id': 'I4551:24293;4209:9174',
            className:
              'flex flex-col items-start gap-[8px] self-stretch h-[auto] relative',
          },
          props['Show Header'] &&
            render(
              'p',
              {
                'data-figma-id': 'I4551:24293;4209:9175',
                className:
                  'self-stretch text-[18px] not-italic font-bold leading-[120%] tracking-[0.2px] h-[auto] relative m-[0]',
                style: {
                  color: '--tui-front-primary',
                  'font-family': 'Tahoma',
                  'white-space': 'normal',
                  'word-wrap': 'break-word',
                },
              },
              'Extend your plan'
            ),
          props['Show Subhead'] &&
            render(
              'p',
              {
                'data-figma-id': 'I4551:24293;4209:9176',
                className:
                  'self-stretch text-[16px] not-italic font-normal leading-[150%] tracking-[0.2px] h-[auto] relative m-[0]',
                style: {
                  color: '--tui-front-primary',
                  'font-family': 'Tahoma',
                  'white-space': 'normal',
                  'word-wrap': 'break-word',
                },
              },
              'Need more flexibility? Reduce your monthly payments by extending your plan up to 12 months.'
            ),
          props['Show Extra block'] &&
            (props['Instance'] ||
              render(
                'div',
                {
                  'data-figma-id': 'I4551:24293;4551:14291',
                  className:
                    'flex flex-col items-start self-stretch h-[auto] relative',
                },
                render(
                  'div',
                  {
                    'data-figma-id': 'I4551:24293;4551:14291;4172:13771',
                    className:
                      'flex items-center gap-[16px] self-stretch h-[40px] relative',
                  },
                  render(
                    'div',
                    {
                      'data-figma-id':
                        'I4551:24293;4551:14291;4172:13771;4250:57284',
                      className:
                        'flex items-center gap-[16px] flex-1 h-[auto] relative',
                    },
                    render(
                      'div',
                      {
                        'data-figma-id':
                          'I4551:24293;4551:14291;4172:13771;4250:57284;4250:52944',
                        className:
                          'flex flex-col justify-center items-start flex-1 h-[auto] relative',
                      },
                      render(
                        'div',
                        {
                          'data-figma-id':
                            'I4551:24293;4551:14291;4172:13771;4250:57284;4250:52944;4250:49625',
                          className:
                            'flex items-start gap-[16px] self-stretch h-[auto] relative',
                        },
                        render(
                          'div',
                          {
                            'data-figma-id':
                              'I4551:24293;4551:14291;4172:13771;4250:57284;4250:52944;4250:56247',
                            className:
                              'flex items-center flex-1 self-stretch relative',
                          },
                          render(
                            'p',
                            {
                              'data-figma-id':
                                'I4551:24293;4551:14291;4172:13771;4250:57284;4250:52944;4250:56247;4250:53639',
                              className:
                                'text-[14px] not-italic font-normal leading-[150%] tracking-[0.2px] w-[auto] h-[auto] relative whitespace-nowrap m-[0]',
                              style: {
                                color: '--tui-front-secondary',
                                'font-family': 'Tahoma',
                              },
                            },
                            props['Value']
                          )
                        ),
                        render(
                          'div',
                          {
                            'data-figma-id':
                              'I4551:24293;4551:14291;4172:13771;4250:57284;4250:52944;4250:56265',
                            className:
                              'flex items-center w-[auto] h-[auto] relative',
                          },
                          render(
                            'p',
                            {
                              'data-figma-id':
                                'I4551:24293;4551:14291;4172:13771;4250:57284;4250:52944;4250:56265;4250:53639',
                              className:
                                'text-right text-[16px] not-italic font-normal leading-[150%] tracking-[0.2px] w-[auto] h-[auto] relative whitespace-nowrap m-[0]',
                              style: {
                                color: '--tui-front-primary',
                                'font-family': 'Tahoma',
                              },
                            },
                            props['Value']
                          )
                        )
                      )
                    )
                  )
                ),
                render(
                  'div',
                  {
                    'data-figma-id': 'I4551:24293;4551:14291;4172:13774',
                    className:
                      'flex items-center gap-[16px] self-stretch h-[40px] relative',
                  },
                  render(
                    'div',
                    {
                      'data-figma-id':
                        'I4551:24293;4551:14291;4172:13774;4250:57284',
                      className:
                        'flex items-center gap-[16px] flex-1 h-[auto] relative',
                    },
                    render(
                      'div',
                      {
                        'data-figma-id':
                          'I4551:24293;4551:14291;4172:13774;4250:57284;4250:52944',
                        className:
                          'flex flex-col justify-center items-start flex-1 h-[auto] relative',
                      },
                      render(
                        'div',
                        {
                          'data-figma-id':
                            'I4551:24293;4551:14291;4172:13774;4250:57284;4250:52944;4250:49625',
                          className:
                            'flex items-start gap-[16px] self-stretch h-[auto] relative',
                        },
                        render(
                          'div',
                          {
                            'data-figma-id':
                              'I4551:24293;4551:14291;4172:13774;4250:57284;4250:52944;4250:56247',
                            className:
                              'flex items-center flex-1 self-stretch relative',
                          },
                          render(
                            'p',
                            {
                              'data-figma-id':
                                'I4551:24293;4551:14291;4172:13774;4250:57284;4250:52944;4250:56247;4250:53639',
                              className:
                                'text-[14px] not-italic font-normal leading-[150%] tracking-[0.2px] w-[auto] h-[auto] relative whitespace-nowrap m-[0]',
                              style: {
                                color: '--tui-front-secondary',
                                'font-family': 'Tahoma',
                              },
                            },
                            props['Value']
                          )
                        ),
                        render(
                          'div',
                          {
                            'data-figma-id':
                              'I4551:24293;4551:14291;4172:13774;4250:57284;4250:52944;4250:56265',
                            className:
                              'flex items-center w-[auto] h-[auto] relative',
                          },
                          render(
                            'p',
                            {
                              'data-figma-id':
                                'I4551:24293;4551:14291;4172:13774;4250:57284;4250:52944;4250:56265;4250:53639',
                              className:
                                'text-right text-[16px] not-italic font-normal leading-[150%] tracking-[0.2px] w-[auto] h-[auto] relative whitespace-nowrap m-[0]',
                              style: {
                                color: '--tui-front-primary',
                                'font-family': 'Tahoma',
                              },
                            },
                            props['Value']
                          )
                        )
                      )
                    )
                  )
                ),
                render(
                  'div',
                  {
                    'data-figma-id': 'I4551:24293;4551:14291;4172:13777',
                    className:
                      'flex items-center gap-[16px] self-stretch h-[40px] relative',
                  },
                  render(
                    'div',
                    {
                      'data-figma-id':
                        'I4551:24293;4551:14291;4172:13777;4250:57284',
                      className:
                        'flex items-center gap-[16px] flex-1 h-[auto] relative',
                    },
                    render(
                      'div',
                      {
                        'data-figma-id':
                          'I4551:24293;4551:14291;4172:13777;4250:57284;4250:52944',
                        className:
                          'flex flex-col justify-center items-start flex-1 h-[auto] relative',
                      },
                      render(
                        'div',
                        {
                          'data-figma-id':
                            'I4551:24293;4551:14291;4172:13777;4250:57284;4250:52944;4250:49625',
                          className:
                            'flex items-start gap-[16px] self-stretch h-[auto] relative',
                        },
                        render(
                          'div',
                          {
                            'data-figma-id':
                              'I4551:24293;4551:14291;4172:13777;4250:57284;4250:52944;4250:56247',
                            className:
                              'flex items-center flex-1 self-stretch relative',
                          },
                          render(
                            'p',
                            {
                              'data-figma-id':
                                'I4551:24293;4551:14291;4172:13777;4250:57284;4250:52944;4250:56247;4250:53639',
                              className:
                                'text-[14px] not-italic font-normal leading-[150%] tracking-[0.2px] w-[auto] h-[auto] relative whitespace-nowrap m-[0]',
                              style: {
                                color: '--tui-front-secondary',
                                'font-family': 'Tahoma',
                              },
                            },
                            props['Value']
                          )
                        ),
                        render(
                          'div',
                          {
                            'data-figma-id':
                              'I4551:24293;4551:14291;4172:13777;4250:57284;4250:52944;4250:56265',
                            className:
                              'flex items-center w-[auto] h-[auto] relative',
                          },
                          render(
                            'p',
                            {
                              'data-figma-id':
                                'I4551:24293;4551:14291;4172:13777;4250:57284;4250:52944;4250:56265;4250:53639',
                              className:
                                'text-right text-[16px] not-italic font-normal leading-[150%] tracking-[0.2px] w-[auto] h-[auto] relative whitespace-nowrap m-[0]',
                              style: {
                                color: '--tui-front-primary',
                                'font-family': 'Tahoma',
                              },
                            },
                            props['Value']
                          )
                        )
                      )
                    )
                  )
                ),
                render(
                  'div',
                  {
                    'data-figma-id': 'I4551:24293;4551:14291;4250:60602',
                    className:
                      'flex items-center gap-[16px] self-stretch h-[40px] relative',
                  },
                  render(
                    'div',
                    {
                      'data-figma-id':
                        'I4551:24293;4551:14291;4250:60602;4250:57284',
                      className:
                        'flex items-center gap-[16px] flex-1 h-[auto] relative',
                    },
                    render(
                      'div',
                      {
                        'data-figma-id':
                          'I4551:24293;4551:14291;4250:60602;4250:57284;4250:52944',
                        className:
                          'flex flex-col justify-center items-start flex-1 h-[auto] relative',
                      },
                      render(
                        'div',
                        {
                          'data-figma-id':
                            'I4551:24293;4551:14291;4250:60602;4250:57284;4250:52944;4250:49625',
                          className:
                            'flex items-start gap-[16px] self-stretch h-[auto] relative',
                        },
                        render(
                          'div',
                          {
                            'data-figma-id':
                              'I4551:24293;4551:14291;4250:60602;4250:57284;4250:52944;4250:56247',
                            className:
                              'flex items-center flex-1 self-stretch relative',
                          },
                          render(
                            'p',
                            {
                              'data-figma-id':
                                'I4551:24293;4551:14291;4250:60602;4250:57284;4250:52944;4250:56247;4250:53639',
                              className:
                                'text-[14px] not-italic font-normal leading-[150%] tracking-[0.2px] w-[auto] h-[auto] relative whitespace-nowrap m-[0]',
                              style: {
                                color: '--tui-front-secondary',
                                'font-family': 'Tahoma',
                              },
                            },
                            props['Value']
                          )
                        ),
                        render(
                          'div',
                          {
                            'data-figma-id':
                              'I4551:24293;4551:14291;4250:60602;4250:57284;4250:52944;4250:56265',
                            className:
                              'flex items-center w-[auto] h-[auto] relative',
                          },
                          render(
                            'p',
                            {
                              'data-figma-id':
                                'I4551:24293;4551:14291;4250:60602;4250:57284;4250:52944;4250:56265;4250:53639',
                              className:
                                'text-right text-[16px] not-italic font-normal leading-[150%] tracking-[0.2px] w-[auto] h-[auto] relative whitespace-nowrap m-[0]',
                              style: {
                                color: '--tui-front-primary',
                                'font-family': 'Tahoma',
                              },
                            },
                            props['Value']
                          )
                        )
                      )
                    )
                  )
                ),
                render(
                  'div',
                  {
                    'data-figma-id': 'I4551:24293;4551:14291;4250:61047',
                    className:
                      'flex items-center gap-[16px] self-stretch h-[40px] relative',
                  },
                  render(
                    'div',
                    {
                      'data-figma-id':
                        'I4551:24293;4551:14291;4250:61047;4250:57284',
                      className:
                        'flex items-center gap-[16px] flex-1 h-[auto] relative',
                    },
                    render(
                      'div',
                      {
                        'data-figma-id':
                          'I4551:24293;4551:14291;4250:61047;4250:57284;4250:52944',
                        className:
                          'flex flex-col justify-center items-start flex-1 h-[auto] relative',
                      },
                      render(
                        'div',
                        {
                          'data-figma-id':
                            'I4551:24293;4551:14291;4250:61047;4250:57284;4250:52944;4250:49625',
                          className:
                            'flex items-start gap-[16px] self-stretch h-[auto] relative',
                        },
                        render(
                          'div',
                          {
                            'data-figma-id':
                              'I4551:24293;4551:14291;4250:61047;4250:57284;4250:52944;4250:56247',
                            className:
                              'flex items-center flex-1 self-stretch relative',
                          },
                          render(
                            'p',
                            {
                              'data-figma-id':
                                'I4551:24293;4551:14291;4250:61047;4250:57284;4250:52944;4250:56247;4250:53639',
                              className:
                                'text-[14px] not-italic font-normal leading-[150%] tracking-[0.2px] w-[auto] h-[auto] relative whitespace-nowrap m-[0]',
                              style: {
                                color: '--tui-front-secondary',
                                'font-family': 'Tahoma',
                              },
                            },
                            props['Value']
                          )
                        ),
                        render(
                          'div',
                          {
                            'data-figma-id':
                              'I4551:24293;4551:14291;4250:61047;4250:57284;4250:52944;4250:56265',
                            className:
                              'flex items-center w-[auto] h-[auto] relative',
                          },
                          render(
                            'p',
                            {
                              'data-figma-id':
                                'I4551:24293;4551:14291;4250:61047;4250:57284;4250:52944;4250:56265;4250:53639',
                              className:
                                'text-right text-[16px] not-italic font-normal leading-[150%] tracking-[0.2px] w-[auto] h-[auto] relative whitespace-nowrap m-[0]',
                              style: {
                                color: '--tui-front-primary',
                                'font-family': 'Tahoma',
                              },
                            },
                            props['Value']
                          )
                        )
                      )
                    )
                  )
                ),
                render(
                  'div',
                  {
                    'data-figma-id': 'I4551:24293;4551:14291;4250:61552',
                    className:
                      'flex items-center gap-[16px] self-stretch h-[40px] relative',
                  },
                  render(
                    'div',
                    {
                      'data-figma-id':
                        'I4551:24293;4551:14291;4250:61552;4250:57284',
                      className:
                        'flex items-center gap-[16px] flex-1 h-[auto] relative',
                    },
                    render(
                      'div',
                      {
                        'data-figma-id':
                          'I4551:24293;4551:14291;4250:61552;4250:57284;4250:52944',
                        className:
                          'flex flex-col justify-center items-start flex-1 h-[auto] relative',
                      },
                      render(
                        'div',
                        {
                          'data-figma-id':
                            'I4551:24293;4551:14291;4250:61552;4250:57284;4250:52944;4250:49625',
                          className:
                            'flex items-start gap-[16px] self-stretch h-[auto] relative',
                        },
                        render(
                          'div',
                          {
                            'data-figma-id':
                              'I4551:24293;4551:14291;4250:61552;4250:57284;4250:52944;4250:56247',
                            className:
                              'flex items-center flex-1 self-stretch relative',
                          },
                          render(
                            'p',
                            {
                              'data-figma-id':
                                'I4551:24293;4551:14291;4250:61552;4250:57284;4250:52944;4250:56247;4250:53639',
                              className:
                                'text-[14px] not-italic font-normal leading-[150%] tracking-[0.2px] w-[auto] h-[auto] relative whitespace-nowrap m-[0]',
                              style: {
                                color: '--tui-front-secondary',
                                'font-family': 'Tahoma',
                              },
                            },
                            props['Value']
                          )
                        ),
                        render(
                          'div',
                          {
                            'data-figma-id':
                              'I4551:24293;4551:14291;4250:61552;4250:57284;4250:52944;4250:56265',
                            className:
                              'flex items-center w-[auto] h-[auto] relative',
                          },
                          render(
                            'p',
                            {
                              'data-figma-id':
                                'I4551:24293;4551:14291;4250:61552;4250:57284;4250:52944;4250:56265;4250:53639',
                              className:
                                'text-right text-[16px] not-italic font-normal leading-[150%] tracking-[0.2px] w-[auto] h-[auto] relative whitespace-nowrap m-[0]',
                              style: {
                                color: '--tui-front-primary',
                                'font-family': 'Tahoma',
                              },
                            },
                            props['Value']
                          )
                        )
                      )
                    )
                  )
                ),
                render(
                  'div',
                  {
                    'data-figma-id': 'I4551:24293;4551:14291;4250:62252',
                    className:
                      'flex items-center gap-[16px] self-stretch h-[40px] relative',
                  },
                  render(
                    'div',
                    {
                      'data-figma-id':
                        'I4551:24293;4551:14291;4250:62252;4250:57284',
                      className:
                        'flex items-center gap-[16px] flex-1 h-[auto] relative',
                    },
                    render(
                      'div',
                      {
                        'data-figma-id':
                          'I4551:24293;4551:14291;4250:62252;4250:57284;4250:52944',
                        className:
                          'flex flex-col justify-center items-start flex-1 h-[auto] relative',
                      },
                      render(
                        'div',
                        {
                          'data-figma-id':
                            'I4551:24293;4551:14291;4250:62252;4250:57284;4250:52944;4250:49625',
                          className:
                            'flex items-start gap-[16px] self-stretch h-[auto] relative',
                        },
                        render(
                          'div',
                          {
                            'data-figma-id':
                              'I4551:24293;4551:14291;4250:62252;4250:57284;4250:52944;4250:56247',
                            className:
                              'flex items-center flex-1 self-stretch relative',
                          },
                          render(
                            'p',
                            {
                              'data-figma-id':
                                'I4551:24293;4551:14291;4250:62252;4250:57284;4250:52944;4250:56247;4250:53639',
                              className:
                                'text-[14px] not-italic font-normal leading-[150%] tracking-[0.2px] w-[auto] h-[auto] relative whitespace-nowrap m-[0]',
                              style: {
                                color: '--tui-front-secondary',
                                'font-family': 'Tahoma',
                              },
                            },
                            props['Value']
                          )
                        ),
                        render(
                          'div',
                          {
                            'data-figma-id':
                              'I4551:24293;4551:14291;4250:62252;4250:57284;4250:52944;4250:56265',
                            className:
                              'flex items-center w-[auto] h-[auto] relative',
                          },
                          render(
                            'p',
                            {
                              'data-figma-id':
                                'I4551:24293;4551:14291;4250:62252;4250:57284;4250:52944;4250:56265;4250:53639',
                              className:
                                'text-right text-[16px] not-italic font-normal leading-[150%] tracking-[0.2px] w-[auto] h-[auto] relative whitespace-nowrap m-[0]',
                              style: {
                                color: '--tui-front-primary',
                                'font-family': 'Tahoma',
                              },
                            },
                            props['Value']
                          )
                        )
                      )
                    )
                  )
                )
              ))
        )
      )
    )
  )
}

const EmailTextBlockLatinPermutations = new Map<
  string,
  (props: EmailTextBlockLatinProps) => React.ReactElement
>([
  ['False', variantEmailTextBlockLatinFalse],
  ['True', variantEmailTextBlockLatinTrue],
])

const EmailTextBlockLatin = (incomingProps: EmailTextBlockLatinProps) => {
  const { props } = useProps(
    {
      'Show Header': true,
      'Show Subhead': true,
      'Show Extra block': true,
      Instance: null,
      Wrapper: 'False',
    } as EmailTextBlockLatinProps,
    incomingProps
  )
  const EmailTextBlockLatinVariantConfig = [
    {
      params: { Wrapper: 'False' },
      interactions: undefined,
      rootElementId: '4209:9173',
    },
    {
      params: { Wrapper: 'True' },
      interactions: undefined,
      rootElementId: '4209:14144',
    },
  ]

  const { content } = useVariantState({
    variants: EmailTextBlockLatinVariantConfig,
    props: props as Record<string, string | undefined>,
    permutations: EmailTextBlockLatinPermutations,
    dimensionOrder: ['Wrapper'],
  })

  return <>{content}</>
}

export default EmailTextBlockLatin

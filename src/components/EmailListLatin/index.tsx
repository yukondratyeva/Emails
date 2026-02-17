import React from 'react'
import {
  useVariantState,
  resolveElementWithProps,
  useProps,
} from '@figmint/react'

interface EmailListLatinProps {
  Wrapper?: 'False' | 'True'
  elementProps?: {
    [elementId: string]: Record<string, any> & {
      className?: string
      style?: React.CSSProperties
      as?: React.ElementType
    }
  }
}

const variantEmailListLatinFalse = (
  incomingProps: EmailListLatinProps & { eventHandlers?: Record<string, any> }
) => {
  const { props } = useProps(
    { Wrapper: 'False' } as EmailListLatinProps,
    incomingProps
  )
  const render = (
    defaultTag: string,
    elementAttrs: Record<string, any>,
    ...children: any[]
  ) =>
    resolveElementWithProps(
      '4172:13795',
      props,
      defaultTag,
      elementAttrs,
      children
    )
  return render(
    'div',
    {
      'data-figma-id': '4172:13795',
      className:
        'flex pb-[24px] flex-col items-start w-[100%] h-[100%] absolute top-[0px] left-[0px]',
    },
    render(
      'div',
      {
        'data-figma-id': '4172:13771',
        className:
          'flex items-center gap-[16px] self-stretch h-[40px] relative',
      },
      render(
        'div',
        {
          'data-figma-id': 'I4172:13771;4250:57284',
          className: 'flex items-center gap-[16px] flex-1 h-[auto] relative',
        },
        render(
          'div',
          {
            'data-figma-id': 'I4172:13771;4250:57284;4250:52944',
            className:
              'flex flex-col justify-center items-start flex-1 h-[auto] relative',
          },
          render(
            'div',
            {
              'data-figma-id': 'I4172:13771;4250:57284;4250:52944;4250:49625',
              className:
                'flex items-start gap-[16px] self-stretch h-[auto] relative',
            },
            render(
              'div',
              {
                'data-figma-id': 'I4172:13771;4250:57284;4250:52944;4250:56247',
                className: 'flex items-center flex-1 self-stretch relative',
              },
              render(
                'p',
                {
                  'data-figma-id':
                    'I4172:13771;4250:57284;4250:52944;4250:56247;4250:53639',
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
                'data-figma-id': 'I4172:13771;4250:57284;4250:52944;4250:56265',
                className: 'flex items-center w-[auto] h-[auto] relative',
              },
              render(
                'p',
                {
                  'data-figma-id':
                    'I4172:13771;4250:57284;4250:52944;4250:56265;4250:53639',
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
        'data-figma-id': '4172:13774',
        className:
          'flex items-center gap-[16px] self-stretch h-[40px] relative',
      },
      render(
        'div',
        {
          'data-figma-id': 'I4172:13774;4250:57284',
          className: 'flex items-center gap-[16px] flex-1 h-[auto] relative',
        },
        render(
          'div',
          {
            'data-figma-id': 'I4172:13774;4250:57284;4250:52944',
            className:
              'flex flex-col justify-center items-start flex-1 h-[auto] relative',
          },
          render(
            'div',
            {
              'data-figma-id': 'I4172:13774;4250:57284;4250:52944;4250:49625',
              className:
                'flex items-start gap-[16px] self-stretch h-[auto] relative',
            },
            render(
              'div',
              {
                'data-figma-id': 'I4172:13774;4250:57284;4250:52944;4250:56247',
                className: 'flex items-center flex-1 self-stretch relative',
              },
              render(
                'p',
                {
                  'data-figma-id':
                    'I4172:13774;4250:57284;4250:52944;4250:56247;4250:53639',
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
                'data-figma-id': 'I4172:13774;4250:57284;4250:52944;4250:56265',
                className: 'flex items-center w-[auto] h-[auto] relative',
              },
              render(
                'p',
                {
                  'data-figma-id':
                    'I4172:13774;4250:57284;4250:52944;4250:56265;4250:53639',
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
        'data-figma-id': '4172:13777',
        className:
          'flex items-center gap-[16px] self-stretch h-[40px] relative',
      },
      render(
        'div',
        {
          'data-figma-id': 'I4172:13777;4250:57284',
          className: 'flex items-center gap-[16px] flex-1 h-[auto] relative',
        },
        render(
          'div',
          {
            'data-figma-id': 'I4172:13777;4250:57284;4250:52944',
            className:
              'flex flex-col justify-center items-start flex-1 h-[auto] relative',
          },
          render(
            'div',
            {
              'data-figma-id': 'I4172:13777;4250:57284;4250:52944;4250:49625',
              className:
                'flex items-start gap-[16px] self-stretch h-[auto] relative',
            },
            render(
              'div',
              {
                'data-figma-id': 'I4172:13777;4250:57284;4250:52944;4250:56247',
                className: 'flex items-center flex-1 self-stretch relative',
              },
              render(
                'p',
                {
                  'data-figma-id':
                    'I4172:13777;4250:57284;4250:52944;4250:56247;4250:53639',
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
                'data-figma-id': 'I4172:13777;4250:57284;4250:52944;4250:56265',
                className: 'flex items-center w-[auto] h-[auto] relative',
              },
              render(
                'p',
                {
                  'data-figma-id':
                    'I4172:13777;4250:57284;4250:52944;4250:56265;4250:53639',
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
        'data-figma-id': '4250:60602',
        className:
          'flex items-center gap-[16px] self-stretch h-[40px] relative',
      },
      render(
        'div',
        {
          'data-figma-id': 'I4250:60602;4250:57284',
          className: 'flex items-center gap-[16px] flex-1 h-[auto] relative',
        },
        render(
          'div',
          {
            'data-figma-id': 'I4250:60602;4250:57284;4250:52944',
            className:
              'flex flex-col justify-center items-start flex-1 h-[auto] relative',
          },
          render(
            'div',
            {
              'data-figma-id': 'I4250:60602;4250:57284;4250:52944;4250:49625',
              className:
                'flex items-start gap-[16px] self-stretch h-[auto] relative',
            },
            render(
              'div',
              {
                'data-figma-id': 'I4250:60602;4250:57284;4250:52944;4250:56247',
                className: 'flex items-center flex-1 self-stretch relative',
              },
              render(
                'p',
                {
                  'data-figma-id':
                    'I4250:60602;4250:57284;4250:52944;4250:56247;4250:53639',
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
                'data-figma-id': 'I4250:60602;4250:57284;4250:52944;4250:56265',
                className: 'flex items-center w-[auto] h-[auto] relative',
              },
              render(
                'p',
                {
                  'data-figma-id':
                    'I4250:60602;4250:57284;4250:52944;4250:56265;4250:53639',
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
        'data-figma-id': '4250:61047',
        className:
          'flex items-center gap-[16px] self-stretch h-[40px] relative',
      },
      render(
        'div',
        {
          'data-figma-id': 'I4250:61047;4250:57284',
          className: 'flex items-center gap-[16px] flex-1 h-[auto] relative',
        },
        render(
          'div',
          {
            'data-figma-id': 'I4250:61047;4250:57284;4250:52944',
            className:
              'flex flex-col justify-center items-start flex-1 h-[auto] relative',
          },
          render(
            'div',
            {
              'data-figma-id': 'I4250:61047;4250:57284;4250:52944;4250:49625',
              className:
                'flex items-start gap-[16px] self-stretch h-[auto] relative',
            },
            render(
              'div',
              {
                'data-figma-id': 'I4250:61047;4250:57284;4250:52944;4250:56247',
                className: 'flex items-center flex-1 self-stretch relative',
              },
              render(
                'p',
                {
                  'data-figma-id':
                    'I4250:61047;4250:57284;4250:52944;4250:56247;4250:53639',
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
                'data-figma-id': 'I4250:61047;4250:57284;4250:52944;4250:56265',
                className: 'flex items-center w-[auto] h-[auto] relative',
              },
              render(
                'p',
                {
                  'data-figma-id':
                    'I4250:61047;4250:57284;4250:52944;4250:56265;4250:53639',
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
        'data-figma-id': '4250:61552',
        className:
          'flex items-center gap-[16px] self-stretch h-[40px] relative',
      },
      render(
        'div',
        {
          'data-figma-id': 'I4250:61552;4250:57284',
          className: 'flex items-center gap-[16px] flex-1 h-[auto] relative',
        },
        render(
          'div',
          {
            'data-figma-id': 'I4250:61552;4250:57284;4250:52944',
            className:
              'flex flex-col justify-center items-start flex-1 h-[auto] relative',
          },
          render(
            'div',
            {
              'data-figma-id': 'I4250:61552;4250:57284;4250:52944;4250:49625',
              className:
                'flex items-start gap-[16px] self-stretch h-[auto] relative',
            },
            render(
              'div',
              {
                'data-figma-id': 'I4250:61552;4250:57284;4250:52944;4250:56247',
                className: 'flex items-center flex-1 self-stretch relative',
              },
              render(
                'p',
                {
                  'data-figma-id':
                    'I4250:61552;4250:57284;4250:52944;4250:56247;4250:53639',
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
                'data-figma-id': 'I4250:61552;4250:57284;4250:52944;4250:56265',
                className: 'flex items-center w-[auto] h-[auto] relative',
              },
              render(
                'p',
                {
                  'data-figma-id':
                    'I4250:61552;4250:57284;4250:52944;4250:56265;4250:53639',
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
        'data-figma-id': '4250:62252',
        className:
          'flex items-center gap-[16px] self-stretch h-[40px] relative',
      },
      render(
        'div',
        {
          'data-figma-id': 'I4250:62252;4250:57284',
          className: 'flex items-center gap-[16px] flex-1 h-[auto] relative',
        },
        render(
          'div',
          {
            'data-figma-id': 'I4250:62252;4250:57284;4250:52944',
            className:
              'flex flex-col justify-center items-start flex-1 h-[auto] relative',
          },
          render(
            'div',
            {
              'data-figma-id': 'I4250:62252;4250:57284;4250:52944;4250:49625',
              className:
                'flex items-start gap-[16px] self-stretch h-[auto] relative',
            },
            render(
              'div',
              {
                'data-figma-id': 'I4250:62252;4250:57284;4250:52944;4250:56247',
                className: 'flex items-center flex-1 self-stretch relative',
              },
              render(
                'p',
                {
                  'data-figma-id':
                    'I4250:62252;4250:57284;4250:52944;4250:56247;4250:53639',
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
                'data-figma-id': 'I4250:62252;4250:57284;4250:52944;4250:56265',
                className: 'flex items-center w-[auto] h-[auto] relative',
              },
              render(
                'p',
                {
                  'data-figma-id':
                    'I4250:62252;4250:57284;4250:52944;4250:56265;4250:53639',
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
  )
}

const variantEmailListLatinTrue = (
  incomingProps: EmailListLatinProps & { eventHandlers?: Record<string, any> }
) => {
  const { props } = useProps(
    { Wrapper: 'False' } as EmailListLatinProps,
    incomingProps
  )
  const render = (
    defaultTag: string,
    elementAttrs: Record<string, any>,
    ...children: any[]
  ) =>
    resolveElementWithProps(
      '4433:37958',
      props,
      defaultTag,
      elementAttrs,
      children
    )
  return render(
    'div',
    {
      'data-figma-id': '4433:37958',
      className:
        'flex pb-[24px] flex-col items-start rounded-[24px] w-[100%] h-[100%] absolute top-[0px] left-[0px]',
      style: { background: '--tui-background-general' },
    },
    render(
      'div',
      {
        'data-figma-id': '4433:38221',
        className:
          'flex p-[16px] flex-col items-start self-stretch rounded-[24px] h-[auto] relative',
        style: { background: '--tui-background-general' },
      },
      render(
        'div',
        {
          'data-figma-id': '4433:37959',
          className: 'flex items-center gap-[16px] w-[311px] h-[40px] relative',
        },
        render(
          'div',
          {
            'data-figma-id': 'I4433:37959;4250:57284',
            className: 'flex items-center gap-[16px] flex-1 h-[auto] relative',
          },
          render(
            'div',
            {
              'data-figma-id': 'I4433:37959;4250:57284;4250:52944',
              className:
                'flex flex-col justify-center items-start flex-1 h-[auto] relative',
            },
            render(
              'div',
              {
                'data-figma-id': 'I4433:37959;4250:57284;4250:52944;4250:49625',
                className:
                  'flex items-start gap-[16px] self-stretch h-[auto] relative',
              },
              render(
                'div',
                {
                  'data-figma-id':
                    'I4433:37959;4250:57284;4250:52944;4250:56247',
                  className: 'flex items-center flex-1 self-stretch relative',
                },
                render(
                  'p',
                  {
                    'data-figma-id':
                      'I4433:37959;4250:57284;4250:52944;4250:56247;4250:53639',
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
                    'I4433:37959;4250:57284;4250:52944;4250:56265',
                  className: 'flex items-center w-[auto] h-[auto] relative',
                },
                render(
                  'p',
                  {
                    'data-figma-id':
                      'I4433:37959;4250:57284;4250:52944;4250:56265;4250:53639',
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
          'data-figma-id': '4433:37960',
          className: 'flex items-center gap-[16px] w-[311px] h-[40px] relative',
        },
        render(
          'div',
          {
            'data-figma-id': 'I4433:37960;4250:57284',
            className: 'flex items-center gap-[16px] flex-1 h-[auto] relative',
          },
          render(
            'div',
            {
              'data-figma-id': 'I4433:37960;4250:57284;4250:52944',
              className:
                'flex flex-col justify-center items-start flex-1 h-[auto] relative',
            },
            render(
              'div',
              {
                'data-figma-id': 'I4433:37960;4250:57284;4250:52944;4250:49625',
                className:
                  'flex items-start gap-[16px] self-stretch h-[auto] relative',
              },
              render(
                'div',
                {
                  'data-figma-id':
                    'I4433:37960;4250:57284;4250:52944;4250:56247',
                  className: 'flex items-center flex-1 self-stretch relative',
                },
                render(
                  'p',
                  {
                    'data-figma-id':
                      'I4433:37960;4250:57284;4250:52944;4250:56247;4250:53639',
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
                    'I4433:37960;4250:57284;4250:52944;4250:56265',
                  className: 'flex items-center w-[auto] h-[auto] relative',
                },
                render(
                  'p',
                  {
                    'data-figma-id':
                      'I4433:37960;4250:57284;4250:52944;4250:56265;4250:53639',
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
          'data-figma-id': '4433:37961',
          className: 'flex items-center gap-[16px] w-[311px] h-[40px] relative',
        },
        render(
          'div',
          {
            'data-figma-id': 'I4433:37961;4250:57284',
            className: 'flex items-center gap-[16px] flex-1 h-[auto] relative',
          },
          render(
            'div',
            {
              'data-figma-id': 'I4433:37961;4250:57284;4250:52944',
              className:
                'flex flex-col justify-center items-start flex-1 h-[auto] relative',
            },
            render(
              'div',
              {
                'data-figma-id': 'I4433:37961;4250:57284;4250:52944;4250:49625',
                className:
                  'flex items-start gap-[16px] self-stretch h-[auto] relative',
              },
              render(
                'div',
                {
                  'data-figma-id':
                    'I4433:37961;4250:57284;4250:52944;4250:56247',
                  className: 'flex items-center flex-1 self-stretch relative',
                },
                render(
                  'p',
                  {
                    'data-figma-id':
                      'I4433:37961;4250:57284;4250:52944;4250:56247;4250:53639',
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
                    'I4433:37961;4250:57284;4250:52944;4250:56265',
                  className: 'flex items-center w-[auto] h-[auto] relative',
                },
                render(
                  'p',
                  {
                    'data-figma-id':
                      'I4433:37961;4250:57284;4250:52944;4250:56265;4250:53639',
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
          'data-figma-id': '4433:37962',
          className: 'flex items-center gap-[16px] w-[311px] h-[40px] relative',
        },
        render(
          'div',
          {
            'data-figma-id': 'I4433:37962;4250:57284',
            className: 'flex items-center gap-[16px] flex-1 h-[auto] relative',
          },
          render(
            'div',
            {
              'data-figma-id': 'I4433:37962;4250:57284;4250:52944',
              className:
                'flex flex-col justify-center items-start flex-1 h-[auto] relative',
            },
            render(
              'div',
              {
                'data-figma-id': 'I4433:37962;4250:57284;4250:52944;4250:49625',
                className:
                  'flex items-start gap-[16px] self-stretch h-[auto] relative',
              },
              render(
                'div',
                {
                  'data-figma-id':
                    'I4433:37962;4250:57284;4250:52944;4250:56247',
                  className: 'flex items-center flex-1 self-stretch relative',
                },
                render(
                  'p',
                  {
                    'data-figma-id':
                      'I4433:37962;4250:57284;4250:52944;4250:56247;4250:53639',
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
                    'I4433:37962;4250:57284;4250:52944;4250:56265',
                  className: 'flex items-center w-[auto] h-[auto] relative',
                },
                render(
                  'p',
                  {
                    'data-figma-id':
                      'I4433:37962;4250:57284;4250:52944;4250:56265;4250:53639',
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
          'data-figma-id': '4433:37963',
          className: 'flex items-center gap-[16px] w-[311px] h-[40px] relative',
        },
        render(
          'div',
          {
            'data-figma-id': 'I4433:37963;4250:57284',
            className: 'flex items-center gap-[16px] flex-1 h-[auto] relative',
          },
          render(
            'div',
            {
              'data-figma-id': 'I4433:37963;4250:57284;4250:52944',
              className:
                'flex flex-col justify-center items-start flex-1 h-[auto] relative',
            },
            render(
              'div',
              {
                'data-figma-id': 'I4433:37963;4250:57284;4250:52944;4250:49625',
                className:
                  'flex items-start gap-[16px] self-stretch h-[auto] relative',
              },
              render(
                'div',
                {
                  'data-figma-id':
                    'I4433:37963;4250:57284;4250:52944;4250:56247',
                  className: 'flex items-center flex-1 self-stretch relative',
                },
                render(
                  'p',
                  {
                    'data-figma-id':
                      'I4433:37963;4250:57284;4250:52944;4250:56247;4250:53639',
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
                    'I4433:37963;4250:57284;4250:52944;4250:56265',
                  className: 'flex items-center w-[auto] h-[auto] relative',
                },
                render(
                  'p',
                  {
                    'data-figma-id':
                      'I4433:37963;4250:57284;4250:52944;4250:56265;4250:53639',
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
          'data-figma-id': '4433:37964',
          className: 'flex items-center gap-[16px] w-[311px] h-[40px] relative',
        },
        render(
          'div',
          {
            'data-figma-id': 'I4433:37964;4250:57284',
            className: 'flex items-center gap-[16px] flex-1 h-[auto] relative',
          },
          render(
            'div',
            {
              'data-figma-id': 'I4433:37964;4250:57284;4250:52944',
              className:
                'flex flex-col justify-center items-start flex-1 h-[auto] relative',
            },
            render(
              'div',
              {
                'data-figma-id': 'I4433:37964;4250:57284;4250:52944;4250:49625',
                className:
                  'flex items-start gap-[16px] self-stretch h-[auto] relative',
              },
              render(
                'div',
                {
                  'data-figma-id':
                    'I4433:37964;4250:57284;4250:52944;4250:56247',
                  className: 'flex items-center flex-1 self-stretch relative',
                },
                render(
                  'p',
                  {
                    'data-figma-id':
                      'I4433:37964;4250:57284;4250:52944;4250:56247;4250:53639',
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
                    'I4433:37964;4250:57284;4250:52944;4250:56265',
                  className: 'flex items-center w-[auto] h-[auto] relative',
                },
                render(
                  'p',
                  {
                    'data-figma-id':
                      'I4433:37964;4250:57284;4250:52944;4250:56265;4250:53639',
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
          'data-figma-id': '4433:37965',
          className: 'flex items-center gap-[16px] w-[311px] h-[40px] relative',
        },
        render(
          'div',
          {
            'data-figma-id': 'I4433:37965;4250:57284',
            className: 'flex items-center gap-[16px] flex-1 h-[auto] relative',
          },
          render(
            'div',
            {
              'data-figma-id': 'I4433:37965;4250:57284;4250:52944',
              className:
                'flex flex-col justify-center items-start flex-1 h-[auto] relative',
            },
            render(
              'div',
              {
                'data-figma-id': 'I4433:37965;4250:57284;4250:52944;4250:49625',
                className:
                  'flex items-start gap-[16px] self-stretch h-[auto] relative',
              },
              render(
                'div',
                {
                  'data-figma-id':
                    'I4433:37965;4250:57284;4250:52944;4250:56247',
                  className: 'flex items-center flex-1 self-stretch relative',
                },
                render(
                  'p',
                  {
                    'data-figma-id':
                      'I4433:37965;4250:57284;4250:52944;4250:56247;4250:53639',
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
                    'I4433:37965;4250:57284;4250:52944;4250:56265',
                  className: 'flex items-center w-[auto] h-[auto] relative',
                },
                render(
                  'p',
                  {
                    'data-figma-id':
                      'I4433:37965;4250:57284;4250:52944;4250:56265;4250:53639',
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
    )
  )
}

const EmailListLatinPermutations = new Map<
  string,
  (props: EmailListLatinProps) => React.ReactElement
>([
  ['False', variantEmailListLatinFalse],
  ['True', variantEmailListLatinTrue],
])

const EmailListLatin = (incomingProps: EmailListLatinProps) => {
  const { props } = useProps(
    { Wrapper: 'False' } as EmailListLatinProps,
    incomingProps
  )
  const EmailListLatinVariantConfig = [
    {
      params: { Wrapper: 'False' },
      interactions: undefined,
      rootElementId: '4172:13795',
    },
    {
      params: { Wrapper: 'True' },
      interactions: undefined,
      rootElementId: '4433:37958',
    },
  ]

  const { content } = useVariantState({
    variants: EmailListLatinVariantConfig,
    props: props as Record<string, string | undefined>,
    permutations: EmailListLatinPermutations,
    dimensionOrder: ['Wrapper'],
  })

  return <>{content}</>
}

export default EmailListLatin

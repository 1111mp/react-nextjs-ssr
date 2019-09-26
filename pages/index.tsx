import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { inject, observer } from 'mobx-react'
import '../styles/index.scss'

interface IStore {
  lastUpdate: any;
}
interface IProps {
  store: IStore;
}
interface IState { }

@inject('store')
@observer
class IndexPage extends React.Component<IProps, IState>{
  public state = {
    count: 1
  }

  public render(): JSX.Element {
    return (
      <div>
        <Head>
          <title>project</title>
          <meta charSet='utf-8' />
          <link rel="icon" href="/static/favicon.ico"/>
          {/* <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />  */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        
        <h1>Testing Next.js App written in TypeScript</h1>
        <h2>{this.props.store.lastUpdate}</h2>
        <Link href="/login">
          <a>登录</a>
        </Link>
      </div>
    )
  }
}

export default IndexPage

import { UserCircleIcon } from '@heroicons/react/solid'
import React from 'react'
import Navbar from '../components/Navbar'

const ReadScreen = () => {
  return (
    <div className="read">
      <Navbar 
        loginScreen={false}
      />
      <div className="container">
        <p className="title">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <div className="info">
          <div className="infoLeft">
            <UserCircleIcon className='profileImage' />
          </div>
          <div className="infoRight">
            <p className="author">Michael Jeffry Setiawan</p>
            <p className="time">9 December 2021 - 8 min read</p>
          </div>
        </div>
        <img src="https://miro.medium.com/max/1400/1*1M5IApSJhFC-jnjCbolZkw.jpeg" alt="testing" className='mainImage' />
        <p className="mainArticle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex illum amet enim doloremque dolor laborum, itaque odio officia? Facilis, iusto. Modi rerum aperiam ipsa possimus at consequatur nesciunt debitis itaque?

          Molestias, quis numquam qui non adipisci provident ex fugiat necessitatibus porro eligendi, tenetur illum suscipit officiis mollitia veritatis maxime enim, culpa assumenda illo commodi sit. Consequuntur, delectus amet! Cum, praesentium?

          Laboriosam repellat tempora consequuntur delectus quos doloremque debitis blanditiis cum natus accusantium numquam, neque, cumque atque cupiditate voluptatem a labore repudiandae officiis nemo omnis nihil. Vel eveniet id debitis dignissimos?

          Inventore accusamus repudiandae illum dolore cum velit natus enim, debitis molestiae consectetur iusto cupiditate aliquam perferendis at molestias eveniet, quaerat repellendus labore ratione beatae eos, odit quasi? At, labore maxime.

          Ut nam omnis nesciunt delectus voluptatibus voluptas cumque sed, nulla dolores, vero consequatur aspernatur sunt velit quo laboriosam necessitatibus dolorum? Eos nulla eum, saepe aliquid officiis facilis beatae incidunt accusantium!

          Officiis optio amet obcaecati enim libero molestiae, aliquam iure saepe recusandae eligendi aliquid soluta dicta excepturi explicabo quo porro eum perferendis similique laborum minima culpa quod. Officiis tenetur temporibus esse!

          Facilis amet veniam voluptatibus enim quas natus repellat? Doloremque neque dolore hic fugit autem esse, voluptate, molestiae sapiente aspernatur consequuntur assumenda cum itaque quia. Incidunt alias autem possimus quis obcaecati!

          Rem numquam vero blanditiis aut quas laborum ducimus adipisci corrupti voluptate sint quos officiis dignissimos aliquam, nesciunt neque iure nam deserunt voluptatem commodi accusamus consequatur, quod praesentium mollitia? Officiis, corrupti.

          Saepe tempora suscipit autem illo recusandae, atque vero ea incidunt exercitationem quo porro quos eum, explicabo ut voluptate neque, magni debitis beatae. Esse molestias quia atque quis. Autem, ut blanditiis.
          
          Accusantium non laborum hic dolor exercitationem voluptatem impedit nihil quae, aperiam asperiores eum voluptatibus dicta quisquam quis, similique quam tempora! Vel asperiores error, quae reprehenderit ad doloremque architecto aliquid ipsa.
        </p>
      </div>
    </div>
  )
}

export default ReadScreen

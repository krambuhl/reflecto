// import logger from 'reflecto-logger'
import Modal from './Modal'

const logger = ($ev) => console.log($ev)

export default {
  example: {
    props: {
      isExpanded: [true, false]
    },
    component: ({ isExpanded }) => h =>
      <Modal
        isExpanded={isExpanded}
        onClose={logger}
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt inventore iste adipisci recusandae maxime officia facere dolor harum necessitatibus, cumque explicabo corrupti dolores possimus? Laborum qui ut ratione amet dolores? Harum quisquam voluptas sint officia dolore voluptatem, porro, suscipit et, sit iure modi vitae animi laudantium aperiam eum voluptatibus quam?</p>
      </Modal>
  }
}

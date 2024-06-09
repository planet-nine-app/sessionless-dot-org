import { EntityComponentSystem } from 'javascript-entity-component-system';

export const setAflame = (elem) => {
  const ecs = new EntityComponentSystem();
  let removeCount = 0;
  let opacity = 1;
  let opacityTween = 0.037;
  let rgb = {r: 200, g: 100, b: 0};
  let rgbTweens = 18;  // obcs all these magic numbers are bad. Trying to go fast here. The reusable element will have
                       // these cleaned up

  const canvas = document.getElementById('canvas');
  let context = canvas.getContext('2d');
  const viewport = {width: 400, height: 500}; // this should be set based on the canvs.

  const physicsComponent = {
    name: "physics",
    state: {
      accelerationY: -3,
      velocityX: 0,
      velocityY: Math.floor(Math.random() * 10)
    }
  };

  const emojis = [`🔥`];

  let positionComponents = [];
  let emojiComponents = [];

//  for(var i = 0; i < 20; i++) {
    positionComponents.push({
      name : "position", // + Math.floor(Math.random() * 1000),
      componentType: 'position',
      state: {
	x: Math.floor(Math.random() * viewport.width),
	y: (viewport.height) + (Math.floor(Math.random() * 35))
      }
    });
    emojiComponents.push({
      name: 'text', // + Math.floor(Math.random() * 1000),
      componentType: 'text',
      state: {
	  text: emojis[0],
	  font: '40px Verdana'
      }
    });
//  }

  const physicsProcessor = {
    name: "physicsProcessor",
    required: ["position", "physics"],
    update(entity, components, processor) {
      const [position, physics] = components;

      physics.state.velocityY += physics.state.accelerationY;
      physics.state.velocityX *= (Math.random() < 0.5 ? -1 : 1);

      position.state.y += physics.state.velocityY
      position.state.x += physics.state.velocityX

      if(position.state.y < 0) {
        position.state.remove = true;
        removeCount++;
      }
    }
  };

  const textProcessor = {
    name: 'textProcessor',
    required: ['position', 'text'],
    update(entity, components, processor) {
	const [position, text] = components;

	if(position.state.remove) {
	    return;
	}

	context.translate(position.state.x, position.state.y);
	context.font = text.state.font;
	context.fillStyle = 'black';
	context.fillText(text.state.text, 0, 0);
	context.translate(-position.state.x, -position.state.y)
    }
  };

  positionComponents.forEach(component => ecs.addComponent(component));
  ecs.addComponent(physicsComponent)

  emojiComponents.forEach(component => ecs.addComponent(component));

  ecs.addProcessor(physicsProcessor);
  ecs.addProcessor(textProcessor);

  for(var i = 0; i < 20; i++) {
    const ent = ecs.createEntity('foo', [
      'position',
      'physics',
      'text'
    ], [
      'physicsProcessor',
      'textProcessor'
    ]);

    const [position] = ecs.getEntityComponents(ent, ["position"]);
    position.state.x = Math.floor(Math.random() * viewport.width);
    position.state.y = (viewport.height) + (Math.floor(Math.random() * 35));
    
    ecs.addEntity(ent);
  }
    

  const gameLoop = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
//    context = canvas.getContext('2d');
    opacity -= opacityTween;
    rgb.r -= rgbTweens;
    rgb.g -= rgbTweens / 2;
    elem.style.opacity = opacity;
    elem.style.backgroundColor = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
    if(opacity < 0) {
      elem.remove();
      canvas.remove();      
      return; 
    }
    if(removeCount >= 20) {
      elem.remove();
      canvas.remove();
      return;
    }
    ecs.update();  
    setTimeout(gameLoop, 33);
  };

  setTimeout(gameLoop, 33);
};

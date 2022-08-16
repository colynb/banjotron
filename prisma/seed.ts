import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
var crypto = require('crypto')

const series2 = [
  { slug: 'aaron-bibelhauser', name: 'Aaron Bibelhauser' },
  { slug: 'aaron-jonah Lewis', name: 'Aaron Jonah Lewis' },
  { slug: 'aaron-mc-daris', name: 'Aaron McDaris' },
  { slug: 'bela-fleck', name: 'Bela Fleck' },
  { slug: 'ben-eldridge', name: 'Ben Eldridge' },
  { slug: 'ben-greene', name: 'Ben Greene' },
  { slug: 'bill-evans', name: 'Bill Evans' },
  { slug: 'billy-failing', name: 'Billy Failing' },
  { slug: 'billy-ray Latham', name: 'Ray Latham' },
  { slug: 'bobby-thompson', name: 'Bobby Thompson' },
  { slug: 'casey-henry', name: 'Casey Henry' },
  { slug: 'cathy-fink', name: 'Cathy Fink' },
  { slug: 'charlie-cushman', name: 'Charlie Cushman' },
  { slug: 'charlie-hall', name: 'Charlie Hall' },
  { slug: 'chris-pandolfi', name: 'Chris Pandolfi' },
  { slug: 'chris-wade', name: 'Chris Wade' },
  { slug: 'chris-warner', name: 'Chris Warner' },
  { slug: 'claudio-parravicini', name: 'Claudio Parravicini' },
  { slug: 'courtney-johnson', name: 'Courtney Johnson' },
  { slug: 'curtis-mc-peake', name: 'Curtis McPeake' },
  { slug: 'daniel-grindstaff', name: 'Daniel Grindstaff' },
  { slug: 'danny-barnes', name: 'Danny Barnes' },
  { slug: 'danny-yancey', name: 'Danny Yancey' },
  { slug: 'david-stringbean" Akeman', name: 'Stringbean" Akeman' },
  { slug: 'dean-phillips', name: 'Dean Phillips' },
  { slug: 'don-stover', name: 'Don Stover' },
  { slug: 'eric-weissberg', name: 'Eric Weissberg' },
  { slug: 'frank-neat', name: 'Frank Neat' },
  { slug: 'gabe-hirschfeld', name: 'Gabe Hirschfeld' },
  { slug: 'gary-biscuit Davis', name: 'Biscuit Davis' },
  { slug: 'gena-britt', name: 'Gena Britt' },
  { slug: 'geoff-stelling', name: 'Geoff Stelling' },
  { slug: 'haskel-mc-cormack', name: 'Haskel McCormack' },
  { slug: 'janet-davis', name: 'Janet Davis' },
  { slug: 'jens-kruger', name: 'Jens Kruger' },
  { slug: 'jerry-keys', name: 'Jerry Keys' },
  { slug: 'jim-mills', name: 'Jim Mills' },
  { slug: 'joe-troop', name: 'Joe Troop' },
  { slug: 'john-hartford', name: 'John Hartford' },
  { slug: 'john-hickman', name: 'John Hickman' },
  { slug: 'john-mcuen', name: 'John Mcuen' },
  { slug: 'justin-jenkins', name: 'Justin Jenkins' },
  { slug: 'kenny-cantrell', name: 'Kenny Cantrell' },
  { slug: 'kenny-ingram', name: 'Kenny Ingram' },
  { slug: 'ken-duke" Weddington', name: 'Duke" Weddington' },
  { slug: 'kyle-tuttle', name: 'Kyle Tuttle' },
  { slug: 'larry-mc-neely', name: 'Larry McNeely' },
  { slug: 'little-roy Lewis', name: 'Roy Lewis' },
  { slug: 'lonnie-hoppers ', name: 'Lonnie Hoppers ' },
  { slug: 'lynn-morris', name: 'Lynn Morris' },
  { slug: 'matthew-davis', name: 'Matthew Davis' },
  { slug: 'mike-lilly', name: 'Mike Lilly' },
  { slug: 'mike-munford', name: 'Mike Munford' },
  { slug: 'murphy-henry', name: 'Murphy Henry' },
  { slug: 'noam-pikelny', name: 'Noam Pikelny' },
  { slug: 'pat-cloud', name: 'Pat Cloud' },
  { slug: 'pete-wernick', name: 'Pete Wernick' },
  { slug: 'randal-morton', name: 'Randal Morton' },
  { slug: 'raymond-fairchild', name: 'Raymond Fairchild' },
  { slug: 'ron-stewart', name: 'Ron Stewart' },
  { slug: 'roscoe-holcomb', name: 'Roscoe Holcomb' },
  { slug: 'roy-clark', name: 'Roy Clark' },
  { slug: 'russ-carson', name: 'Russ Carson' },
  { slug: 'ryan-cavanaugh', name: 'Ryan Cavanaugh' },
  { slug: 'steve-cooley', name: 'Steve Cooley' },
  { slug: 'steve-huber', name: 'Steve Huber' },
  { slug: 'steve-martin', name: 'Steve Martin' },
  { slug: 'tom-adams', name: 'Tom Adams' },
  { slug: 'tom-nechville', name: 'Tom Nechville' },
  { slug: 'tray-wellington', name: 'Tray Wellington' },
  { slug: 'vic-jordan', name: 'Vic Jordan' },
  { slug: 'wiley-bailey', name: 'Wiley Bailey' },
]

const series1 = [
  { slug: 'alan-munde', name: 'Alan Munde' },
  { slug: 'alison-brown', name: 'Alison Brown' },
  { slug: 'ashley-campbell', name: 'Ashley Campbell' },
  { slug: 'ben-clark', name: 'Ben Clark' },
  { slug: 'bill-emerson', name: 'Bill Emerson' },
  { slug: 'bill-keith', name: 'Bill Keith' },
  { slug: 'butch-robins', name: 'Butch Robins' },
  { slug: 'carl-jackson', name: 'Carl Jackson' },
  { slug: 'catherine-bb-bowness', name: 'Catherine “BB” Bowness' },
  { slug: 'charlie-poole', name: 'Charlie Poole' },
  { slug: 'cory-walker', name: 'Cory Walker' },
  { slug: 'don-reno', name: 'Don Reno' },
  { slug: 'don-wayne-reno', name: 'Don Wayne Reno' },
  { slug: 'doug-dillard', name: 'Doug Dillard' },
  { slug: 'earl-scruggs', name: 'Earl Scruggs' },
  { slug: 'eddie-adcock', name: 'Eddie Adcock' },
  { slug: 'gina-furtado', name: 'Gina Furtado' },
  { slug: 'greg-cahill', name: 'Greg Cahill' },
  { slug: 'jd-crowe', name: 'J.D. Crowe' },
  { slug: 'jason-davis', name: 'Jason Davis' },
  { slug: 'jens-koch', name: 'Jens Koch' },
  { slug: 'jeremy-stephens', name: 'Jeremy Stephens' },
  { slug: 'jim-pankey', name: 'Jim Pankey' },
  { slug: 'john-apfelthaler', name: 'John Apfelthaler' },
  { slug: 'john-dowling', name: 'John Dowling' },
  { slug: 'kenny-brown', name: 'Kenny Brown' },
  { slug: 'kristin-scott-benson', name: 'Kristin Scott Benson' },
  { slug: 'mike-scott', name: 'Mike Scott' },
  { slug: 'mike-sumner', name: 'Mike Sumner' },
  { slug: 'ned-luberecki', name: 'Ned Luberecki' },
  { slug: 'nick-einterz', name: 'Nick Einterz' },
  { slug: 'nick-hornbuckle', name: 'Nick Hornbuckle' },
  { slug: 'ralph-stanley', name: 'Ralph Stanley' },
  { slug: 'robby-boone', name: 'Robby Boone' },
  { slug: 'ron-block', name: 'Ron Block' },
  { slug: 'sammy-shelor', name: 'Sammy Shelor' },
  { slug: 'scott-vestal', name: 'Scott Vestal' },
  { slug: 'snuffy-jenkins', name: 'Snuffy Jenkins' },
  { slug: 'sonny-osborne', name: 'Sonny Osborne' },
  { slug: 'terry-baucom', name: 'Terry Baucom' },
  { slug: 'tony-trischka', name: 'Tony Trischka' },
  { slug: 'wes-corbett', name: 'Wes Corbett' },
]

async function main() {
  for (let i = 1; i < series1.length; i++) {
    const player = series1[i]
    const code = crypto.randomBytes(3).toString('hex')
    const created = await prisma.player.upsert({
      where: { slug: player.slug },
      update: {},
      create: {
        name: player.name,
        slug: player.slug,
        code,
        series: 1,
        active: true,
        userId: 1,
      },
    })

    console.log(`Series 1 player ${created.name} added!`)
  }

  for (let i = 1; i < series2.length; i++) {
    const player = series2[i]
    const code = crypto.randomBytes(3).toString('hex')
    const created = await prisma.player.upsert({
      where: { slug: player.slug },
      update: {},
      create: {
        name: player.name,
        slug: player.slug,
        code,
        series: 2,
        active: true,
        userId: 1,
      },
    })

    console.log(`Series 2 player ${created.name} added!`)
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

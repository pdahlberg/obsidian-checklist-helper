
export default class Stuff {

  private counter = 0

  shouldTriggerChange(filePath: string, fileSize: number): boolean {
    this.counter++
    return this.counter % 2 == 0
  }

  changeFileContent(fileContent: string): string {
    return `${fileContent}\nappended`
  }

}